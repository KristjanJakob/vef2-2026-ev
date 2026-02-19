# Pathfinder
Pathfinder er vefforit/vefsíða sem hjálpar ungu fólki að finna hvaða nám gæti hentað þeim út frá einfaldri könnun.

### 1. Inngangur
Pathfinder er vefforrit sem hjálpar fólki að finna hvaða nám gæti hentað þeim út frá könnun. Hugmyndin kom út frá því að margir eru óvissir um námsval.


### 2. Hvaða skilyrði verða útfærð
Verkefnið um uppfylla eftirfarandi skilyrði:
- Bakendi útfærður
- Framendi útfærður
- Flóknari framendi
- Gagnagrunnur notaður
- Verkefni sett upp í hýsingu

### 3. Verkplan
Vika 6-7:
- Hugmynd og grunnuppsetning
- Setja upp Express og PostgreSQL
- Búa til einfalt quiz

Vika 8-9:
- Búa til fleiri spurningar
- Geyma niðurstöður í gagnagrunni

Vika 10-12:
- Bæta hönnun og útlit
- Prófun á virkni

Vika 13:
- Setja upp á hýsingu

Vika 14-15:
- Skrifa skýrslu

### 4. Matskvarði
20% Bakendi útfærður og virkur
20% Gagnagrunnur notaður rétt
20% Framendi og margar spurningar
20% Verkefni sett upp í hýsingu
20% Skýrsla og útskýring á forritinu

### 5. Tæki og tól
- Node.js
- Express
- EJS
- PostgreSQL
- Docker

### 3. Ræsa PostgreSQL með Docker
docker-compose up -d

### 6. Uppsetning
Keyrðu:
psql postgres://postgres:postgres@localhost:5432/studyquiz -f sql/schema.sql

psql postgres://postgres:postgres@localhost:5432/studyquiz -f sql/seed.sql

#### Ræsa server
npm install
npm run dev

Opna:
http://localhost:3000