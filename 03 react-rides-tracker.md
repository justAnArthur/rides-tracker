<<<<<<< HEAD
- [ ] 📅 2023-11-27
=======
- [x]  📅 2023-11-27 ✅ 2023-12-13
>>>>>>> 16da994 (- files)

---

# Podmienky hodnotenia !!!

1. Projekt musi byt spustitelny cez "docker-compose build" a "docker-compose up" !!!!! V opacnom pripade bude projekt
   hodnoteny celkovo 0 bodmi.
2. Pokial po zadani prikazov z bodu 1. nebude odpoved na http://localhost:8080 a vsetka komunikacia na server nebude
   prebiehat len na porte 8080 projekt bude hodnoteny celkovo 0 bodmi.
3. Projekt musi pouzivat iba docker image node@20.9.0 pri akomkolvek pouziti node.js inak bude prjekt hodnoteny celkovo
   0 bodmi.
4. Verzie docker image musia presne zodpovedat verziam uvedenym v celom zadani (ani ziadne derivacie -alpine, -lite, ani
   nic podobne) inak bude projekt hodnoteny celkovo 0 bodmi.

# Ciel

Cielom zadania je vytvorit webovu aplikaciu pre monitorovanie jazdy autom. Aplikacia bude odpovedat iba na adrese
localhost, porte 8080.

# Bodovanie
<<<<<<< HEAD

1. DB a praca s nou v ramci JS SUM 5
    1. ✅ trasy [km]                      1
    2. ✅ trvania [h], spotreby [l/100km] 1
    3. pouzivatelia 1
    4. ✅ typ jazdy 1
    5. reklama 1
2. rozhranie aplikacie pouzivatela SUM 12
    1. ✅ stranky s moznostou registracie a prihlasenia pouzivatela 1
    2. stranky so spravou jazd
        1. vlozit a zmazat jazdu 2
        2. import a export jazd 2
        3. stranka so spravou typov jazd (vlozit, zmazat)2
    3. stranka s tabulkou a grafom udajov jazd
        1. moznostou vyberu casoveho rozsahu 2
        2. zobrazenie linearnej regresie
            1. dlzka trasy 1
            2. trvanie jazdy a priemerna spotreba 1
            3. filtracia udajov podla typu jazdy 2
    4. stranka s reklamou 1
3. admin rozrhanie SUM 3
    1. ✅ so spravou pouzivatelov - vytvorit a zmazat pouzivatela 1
    2. ✅ import pouzivatelov a export pouzivatelov 1
    3. ✅ nastavenie reklamy a zobrazenie pocitadla 1
4. end-to-end test vlozenia jazdy (simulacia network callov a pouzite mocha, v samostatnom docker containeri!) 5
=======
1    DB a praca s nou v ramci JS   SUM  5
a       ✅ trasy [km]                      1
b       ✅ trvania [h], spotreby [l/100km] 1
c       pouzivatelia                    1
d       ✅ typ jazdy                       1
e       reklama                         1

2    rozhranie aplikacie pouzivatela                                           SUM 12
a       ✅ stranky s moznostou registracie a prihlasenia pouzivatela                   1
stranky so spravou jazd
b         vlozit a zmazat jazdu                                                     2
c         import a export jazd                                                      2
d       stranka so spravou typov jazd (vlozit, zmazat)                              2
stranka s tabulkou a grafom udajov jazd
e         moznostou vyberu casoveho rozsahu                                         2
zobrazenie linearnej regresie
f           dlzka trasy                                                             1
g           trvanie jazdy a priemerna spotreba                                      1
h         filtracia udajov podla typu jazdy                                         2
i       stranka s reklamou                                                          1

3    admin rozrhanie                                        SUM 3
a       so spravou pouzivatelov - vytvorit a zmazat pouzivatela 1
b       import pouzivatelov a export pouzivatelov               1
c       nastavenie reklamy a zobrazenie pocitadla               1

4    end-to-end test vlozenia jazdy (simulacia network callov a pouzite mocha, v samostatnom docker containeri!) 5
>>>>>>> 16da994 (- files)

# DB

RDB: mysql@8.2.0, postgresql@16.0, mariadb@11.1.2, ??? - inak sa opytajte (ziadne dokumentove DB, nie sqlite)
Seed DB (vytvorenie tabuliek pripadne ich naplnenie seed udajmi) musi byt automaticky pri zapnuti projektu.
trasy/trvania/spotreby: id, datum (YYYY-MM-DD), hodnota, typ jazdy (moze byt id, nazov alebo NULL/''), id pouzivatel
Pouzivatelia: id, e-mail (unikatny), meno, heslo, vek
Typ: id, nazov, popis
Reklama: link k obrazku, link na ciel, pocitadlo
DB musi byt vytvorena pri build/up, neodovzdavate volume ani vlastny image DB.

# Rozhranie pouzivatel

stranky jazd - vlozit jazdu (samostatne), importovat jazdy z CSV (datum YYYY-MM-DD, hodnota, typ (
trasa/trvanie/spotreba), typ jazdy), exportovat merania do CSV
reklama - reklama sa bude zobrazovat kazdu minutu pouzivania aplikacie. Po stlaceni reklamy sa inkrementuje pocitadlo a
presmeruje sa na cielovu adresu odkazu

# Rozhranie admin

meno: admin
heslo: admin
stranka pre admina - import a export pouzivatelov v CSV (e-mail, meno, heslo, vek) reklama s moznostou zmeny linkov (
img + href) a zobrazenie aktualneho stavu pocitadla reklamneho baneru

# Povolene kniznice a frameworky

React, Angular, Vue, Svelte
sequelize/typeorm, express, jquery, axios
TypeScript
cokolvek ine - treba sa spytat

nie: nest.js

Kazdy student zodpoveda za vypracovanie samostatne. V pripade akychkolvek nejasnosti v zadani je povinnostou studenta
ich konzultovat s garantom predmetu a to pred odovzdanim do miesta odovzdania. V pripade, ze student objavi nejasnost
zadania po odovzdani ma vyucujuci pravo nepridelit body za danu funkcionalitu alebo projekt podla svojho zhodnotenia. (
priklad: "...ja som to pochopil tak, ze...")
