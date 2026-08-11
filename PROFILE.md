# Profile — single source of truth

Everything public about my work comes from this file. **Edit here first, then sync
the four surfaces below.** If a claim is not in this file, it does not go anywhere.

Surfaces to keep in sync:

| Surface        | Where                                                 | How                                                                         |
| -------------- | ----------------------------------------------------- | --------------------------------------------------------------------------- |
| English CV     | `latex-cv-francisco-pereira/CV_ENG.tex`               | edit, compile on Overleaf, export to `downloads/franciscopereira.cv.en.pdf` |
| Portuguese CV  | `latex-cv-francisco-pereira/CV_PT.tex`                | same, export to `downloads/franciscopereira.cv.pt.pdf`                      |
| Portfolio site | `lang.json` (`subtitle`, `subsubtitle`, `about_text`) | edit both `en-GB` and `pt-PT`                                               |
| LinkedIn       | linkedin.com/in/francisco-pereira-9755501a3           | paste from the blocks below                                                 |

## Rules

1. **No claim without evidence.** If I cannot point to a system, a repo, or a
   measurable result, it does not go on the CV. No "specialised in", no
   "bridging X and Y", no "state-of-the-art".
2. **Say the real scale.** Staging is staging. An MVP is an MVP. A prototype that
   never scaled still counts — describing it accurately costs nothing and
   survives an interview.
3. **Fewer things, kept current.** Every extra bullet is another thing to keep in
   sync across four places. When in doubt, cut it.
4. **Titles match the contract.** Whatever is on the contract is what goes
   everywhere, identically.

---

## Identity

|              | EN                                                                                 | PT                           |
| ------------ | ---------------------------------------------------------------------------------- | ---------------------------- |
| Title        | Software Developer                                                                 | Técnico de Informática       |
| Sub-headline | Python \| LLM applications                                                         | Python \| Aplicações com LLM |
| Email        | ffarps@protonmail.com                                                              | ffarps@protonmail.com        |
| Phone        | +351 926 843 295                                                                   | +351 926 843 295             |
| Links        | ffarps.github.io · github.com/ffarps · linkedin.com/in/francisco-pereira-9755501a3 | same                         |

**One title per language, used everywhere in that language** — CV headline, CV
experience entry, site, and (for English) the LinkedIn headline _and_ position
field. No split between "headline" and "job title": that is one more thing to
keep in sync and it is not worth it.

The contract says _Técnico de Informática_. "Informatics Technician" is the
literal English rendering, but it is a Portuguese administrative classification
that means little to an English-speaking recruiter — **Software Developer** is the
honest translation of the job, not an upgrade of it.

Change the title when the job changes, not before.

---

## Overview

**EN** — Software developer maintaining and modernising legacy core products in
Python, including LLM-backed conversational features. In a previous R&D role I
built the company's first AI prototypes: a
retrieval-augmented assistant over the internal Confluence knowledge base and a
self-hosted LLM inference API running on local hardware.

Peer-reviewed publication in mixed reality for smart manufacturing. Starting a
postgraduate degree in Applied Machine Learning in September 2026, working towards
a Machine Learning Engineering role.

**PT** — Técnico de informática numa empresa de software, onde asseguro a manutenção
e modernização de produtos legados em Python, incluindo funcionalidades
conversacionais assentes em modelos de linguagem (LLM). Numa função anterior de
I&D, desenvolvi os primeiros protótipos de IA da empresa: um assistente com geração
aumentada por recuperação (RAG) sobre a base de conhecimento interna em Confluence
e uma API de inferência de LLM alojada em infraestrutura própria.

Artigo científico publicado na área da realidade mista aplicada ao fabrico
inteligente. Em setembro de 2026 inicio uma pós-graduação em Machine Learning
Aplicado, com o objetivo de seguir uma carreira em Engenharia de Machine Learning.

---

## Experience

### Jan 2026 – Present · Software Developer / Técnico de Informática · GoTVee · Remote

- Maintain and modernise legacy core products, refactoring and sustaining systems the business depends on.
- Build and maintain features in Python, including LLM-backed conversational features.
- Maintain and extend a multi-tenant enterprise video platform serving thousands of videos for the company's largest client: bug resolution, new features and ongoing code maintenance.

_PT:_ Manutenção e modernização de produtos legados, com refatoração e sustentação
dos sistemas de que o negócio depende. · Desenvolvimento e manutenção de
funcionalidades em Python, incluindo funcionalidades conversacionais assentes em
LLM. · Manutenção e evolução de uma plataforma empresarial multi-tenant de vídeo
que disponibiliza milhares de vídeos ao maior cliente da empresa.

### Jan 2025 – Dec 2025 · Research and Development Technician · GoTVee · Bragança, Hybrid

- Built an internal retrieval-augmented (RAG) assistant over the company's Confluence knowledge base, indexing 30+ spaces for natural-language search.
- Designed and deployed a self-hosted LLM inference API on an RTX 3090 (24 GB), using Ollama and LangChain with vector search over locally generated embeddings, removing any dependency on external model providers.
- Prototyped a per-video chat widget for the enterprise video platform, delivered to staging as a working MVP.

### Jan 2024 – Dec 2024 · Software Developer Internship · GoTVee · Bragança, Hybrid

- Developed PoCs and MVPs for AI systems using large language models, building both the Python services and the interfaces used to evaluate them.

### Jul 2023 – Sep 2023 · Research Fellowship · CeDRI, Universidade Politécnica de Bragança

- Contributed to a C# and OpenGL tool in Unity 3D for the OpenZDM project, improving defect detection in automotive assembly and body shop quality assurance.

### Jul 2022 – Jan 2023 · Research Fellowship · CeDRI, Universidade Politécnica de Bragança

- Developed mixed reality (AR and VR) applications in Unity 3D.

---

## Education

- **Sep 2026 – 2027** · Postgraduate Degree in Applied Machine Learning · ISCTE – Instituto Universitário de Lisboa
  - _PT:_ Pós-Graduação em Machine Learning Aplicado · ISCTE – Instituto Universitário de Lisboa
- **Oct 2019 – Jul 2023** · Degree in Informatics Engineering · Universidade Politécnica de Bragança
  - Scientific areas: Computer Science, Computer Engineering, Mathematics, Information Systems
  - Awarded two research fellowships

---

## Skills

- **Programming** — Python, C#, JavaScript
- **AI / ML** — self-hosted LLM inference (Ollama), RAG with LangChain, vector embeddings and similarity search (FAISS), CUDA-accelerated inference
  - _FAISS is what shipped. Qdrant was evaluated but not used — do not list it._
- **Backend** — FastAPI, Django, REST APIs, NGINX _(frameworks I know and have shipped with; not what I work in day to day right now)_
- **Data** — SQL, NoSQL, vector databases
- **Platforms & Tools** — Linux, Bash, Docker, CI/CD, Git (GitHub, GitLab, BitBucket), GCP, Unity 3D

---

## Publication

**An Augmented Reality Intelligent Guide for the Automotive Industry**
Learning Factories of the Future (CFL 2024) · University of Twente, Enschede, The
Netherlands · Jul 2024 · DOI: 10.1007/978-3-031-65400-8_23

---

## Projects

_Held back until the new AI project is publishable._ The Projects section is
commented out in both `.tex` files — uncomment and fill in when ready.

---

## LinkedIn — paste blocks

De-jargoned to match the CVs. Replaces the current wording.

**Headline:** `Software Developer | Python | LLM applications`

**Jan 2026 – Present · Software Developer · Remote**

```
- Maintaining and modernising legacy core products, refactoring and sustaining systems the business depends on
- Building and maintaining features in Python, including LLM-backed conversational features
- Maintaining and extending a multi-tenant enterprise video platform serving thousands of videos for the company's largest client
```

**Jan 2025 – Dec 2025 · Research and Development Technician · Bragança, Hybrid**

```
- Built an internal RAG assistant over the company's Confluence knowledge base, indexing 30+ spaces for natural-language search
- Designed and deployed a self-hosted LLM inference API on an RTX 3090 (24 GB) using Ollama and LangChain, with vector search over locally generated embeddings
- Prototyped a per-video chat widget for the enterprise video platform, delivered to staging as a working MVP
```

**Jan 2024 – Dec 2024 · Software Developer Internship · Bragança, Hybrid**

```
Developed PoCs and MVPs for AI systems using large language models, building both the Python services and the interfaces used to evaluate them.
```
