# Pathfinder
Pathfinder er vefforit/vefsíða sem hjálpar ungu fólki að finna hvaða nám gæti hentað þeim út frá einfaldri könnun.

## Lýsing
Notandi svarar spurningum og fær svo tillögur að násmleið út frá áhugasviði og styrkleikum.

Verkefnið er unnið í Nide.js með Express og PostgreSQL gagnagrunni.

---

## Tæki og tól
- Node.js
- Express
- EJS
- PostgreSQL
- Docker

---

## Uppsetning
### 1. Klóna repo
git clone <repo-url>
cd pathfinder

### 1. Setja upp þenv
Búðu til `.env` skrá:
DATABASE_URL=postgres://postgres:postgres@localhost:5432/studyquiz
PORT=3000

### 3. Ræsa PostgreSQL með Docker
docker-compose up -d

### 4. Búa til töflur
Keyrðu:
psql postgres://postgres:postgres@localhost:5432/studyquiz -f sql/schema.sql

psql postgres://postgres:postgres@localhost:5432/studyquiz -f sql/seed.sql

### 5. Ræsa server
npm install
npm run dev

Opna:
http://localhost:3000

---

## Verkefnisskipulag
/src
    routes/
    db/
    services/
    public/

---

## Markmið
- Útfæra quiz
- Nota gagnagrunn
- Hýsa verkefnið
- Skrifa skýrslu