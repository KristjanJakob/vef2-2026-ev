# Pathfinder
Pathfinder er vefforrit/vefsíða sem hjálpar ungu fólki að finna hvaða nám gæti hentað þeim út frá einfaldri könnun.

## Lýsing
Notandi svarar spurningum og fær svo tillögur að násmleið út frá áhugasviði og styrkleikum.

Verkefnið er unnið í Node.js með Express og PostgreSQL gagnagrunni.

---

## Tæki og tól
- Node.js
- Express
- EJS
- PostgreSQL
- Docker
- CSS
- JavaScript

---

## Uppsetning
### 1. Klóna repo
git clone <repo-url>
cd pathfinder

### 2. Setja upp .env
Búa til `.env` skrá:
PGHOST=localhost
PGPORT=5432
PGDATABASE=studyquiz
PGUSER=postgres
PGPASSWORD=postgres
PORT=3000

Fyrir hýsingu:
DATABASE_URL=postgresql://pathfinder_db_6eqr_user:C8amL9b4eR0PtMbnnewlxdjuDdvg3BSo@dpg-d7ie5sd8nd3s73dlt3kg-a.oregon-postgres.render.com/pathfinder_db_6eqr

### 3. Ræsa PostgreSQL með Docker
docker-compose up -d

### 4. Búa til töflur
Keyrðu:

docker exec -i pathfinder-db-1 psql -U postgres -d studyquiz < sql/schema.sql

docker exec -i pathfinder-db-1 psql -U postgres -d studyquiz < sql/seed.sql

### 5. Ræsa server og setja upp pakka
npm install
npm run dev

Opna:
http://localhost:3000

---

## Virkni

- Quiz með nokkrum spurningum
- Scoring system sem raðar í flokka
- Top 3 niðurstöður birtar
- Sér síða fyrir hverja námsleið
- Gagnagrunnur með námsleiðum og linka á skólana sem námið er kennt í

## Verkefnisskipulag
/src
    routes/
    db/
    services/
    public/

---

## Markmið
- Útfæra quiz
- Útfæra framenda og bakenda
- Nota gagnagrunn
- Hýsa verkefnið
- Skrifa skýrslu

## Hýsing
Render: https://vef2-2026-ev.onrender.com/


## GitHub repo
https://github.com/KristjanJakob/vef2-2026-ev