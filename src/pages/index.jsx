import { useData, useForm } from "../utils.js";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from "chart.js";
import { Line } from "react-chartjs-2";
import { pathParams } from "./ride/[km,time,usage].jsx";
import { Export } from "../components/Form.jsx";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  return <ul>
    <li>
      <a href="/advertisement">advertisements</a>
    </li>
    <li>
      <a href="/user">users</a>
    </li>
  </ul>
}

const RidesChart = () => {
  const { handleChange, formState } = useForm({ onSubmit: () => undefined, defaultValues: { kind: 'km' } })
  let {
    data,
    error
  } = useData(formState.dateFrom && formState.dateTo && formState.kind && `/api/ride/${formState.kind}/range`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formState)
  })

  return <div>
    <div>
      <label>
        dateFrom
        <input type="date" name="dateFrom" onChange={handleChange}/>
      </label>
      <label>
        dateTo
        <input type="date" name="dateTo" onChange={handleChange}/>
      </label>
      <label>
        type
        <select name="kind" onChange={handleChange} value={formState.kind} required>
          <option value="" disabled hidden>
            choose
          </option>
          {pathParams?.map((value) =>
            <option key={value} value={value}>{value}</option>
          )}
        </select>
      </label>
      {error && <p>{error.toString()}</p>}
    </div>
    {data?.length === 0 && <p>there&apos;s no data for selected period</p>}
    {data?.length > 0
      && <>
        <Line
          data={{
            labels: data
              .sort((prev, current) => new Date(prev.createdAt) - new Date(current.createdAt))
              .map(({ createdAt }) => new Date(createdAt).toISOString().slice(0, -1)),
            datasets: [
              {
                label: formState.kind,
                data: data
                  .map(({ value }) => value)
              }
            ]
          }}
          options={{
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
        Medium:{' '}
        {Math.ceil(data.reduce((prev, { value }) => prev + value, 0) / data.length)}
      </>}
  </div>
}


const ExportRides = () => {
  const { data: kms } = useData('/api/ride/km')
  const { data: times } = useData('/api/ride/time')
  const { data: usages } = useData('/api/ride/usage')

  const data = [
    ...(kms ? kms.map(km => ({ ...km, kind: 'km' })) : []),
    ...(times ? times.map(km => ({ ...km, kind: 'time' })) : []),
    ...(usages ? usages.map(km => ({ ...km, kind: 'usage' })) : [])
  ]

  if (data.length > 1)
    return <Export {...{ data }} />
}

const UserDashboard = () => {
  return <section>
    <ul>
      <li>
        <a href="/ride/type">types</a>
      </li>
      <li>
        rides{' '}
        <ExportRides/>
        <ul>
          <li>
            <a href="/ride/km">kms</a>
          </li>
          <li>
            <a href="/ride/time">times</a>
          </li>
          <li>
            <a href="/ride/usage">usages</a>
          </li>
        </ul>
      </li>
    </ul>
    <aside>
      <RidesChart/>
    </aside>
  </section>
}

export default function Dashboard() {
  const { data, loading, error } = useData('/api/user/me')

  if (loading)
    return 'loading...'

  if (error)
    return error.toString()

  if (data.admin)
    return <AdminDashboard/>

  return <UserDashboard/>
}