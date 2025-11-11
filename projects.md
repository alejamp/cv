# Cel.ai

## 1. ¿Qué es Cel.ai?

Cel.ai es un **framework open-source** diseñado para **acelerar el desarrollo de asistentes virtuales omnicanal** (chatbots, voz, mensajería) que pueden integrarse en múltiples conectores (WhatsApp, Telegram, VoIP, etc.). ([GitHub][1])
Se destaca por permitir el despliegue **self-hosted**, lo que da mayor control y personalización frente a plataformas cerradas. ([GitHub][1])
**role:** Founder / Chief Architect
---

## 2. Principales capacidades / características

Algunas de las capacidades más importantes que ofrece:

* Soporte de conectores ya listos para usar: WhatsApp, Telegram, VAPI.ai, Chatwoot. ([GitHub][1])
* Router de múltiples asistentes: la arquitectura permite tener varios “asistentes” especializados (por ejemplo: reservas, cancelaciones, servicio de habitación) y enrutar al correcto según contexto, intención o estado. ([GitHub][1])
* Enrutamiento “in-context”: los asistentes comparten historia, contexto y variables de estado para dar una experiencia fluida al usuario. ([GitHub][1])
* Herramientas/Herramienting incluidas: eventos como `message`, `image`, `new_conversation` y más. Moderación, blacklists, integración con Langchain, trazabilidad con Langsmith. ([GitHub][1])
* Diseño modular: permite que cada asistente tenga prompts pequeños y enfocados, para mantener la calidad de respuestas y controlar costos. ([GitHub][1])

---

## 3. Instalación y “getting started”

* Puedes instalarlo vía pip: `pip install celai` (según el README) ([GitHub][1])
* Ejemplo rápido: configurar variables de entorno como `OPENAI_API_KEY`, `NGROK_AUTHTOKEN` para exponer un endpoint público. ([GitHub][1])
* Luego, crear un asistente sencillo: usar el conector de Telegram, definir el prompt, crear un gateway de mensajes, registrar el conector y ejecutar. ([GitHub][1])

---

## 4. Público objetivo / casos de uso

* Empresas o desarrolladores que quieran **desplegar asistentes virtuales omnicanal** con control total (versus usar “plataformas SaaS” que imponen restricciones).
* Casos de uso como: atención al cliente multi-canal, reservas, soporte, bots de ventas, chat/voz integrados, etc.
* Ideal si ya usas modelos de LLM (ej. GPT‑4o) o herramientas como Langchain, y quieres integrarlas en un flujo de producción con múltiples canales.

---

## 5. Ventajas destacadas

* Flexibilidad: auto-hospedado, modular, puedes adaptar los conectores/routers según tu necesidad.
* Escalabilidad: la arquitectura de “multi-asistente + enrutamiento” permite crecer en complejidad sin mezclar todo en un solo “bot monolítico”.
* Contexto compartido: múltiples asistentes comparten historia/estado para experiencia coherente.
* Integración moderna: usa Langchain, trazabilidad con Langsmith, soporta imágenes, eventos, etc.

---

## 6. Consideraciones / limitaciones

* Aunque es prometedor, al tratarse de open-source quizá requiera mayor nivel de implementación/configuración (versus plataformas “plug & play”).
* Dependencia de tu infraestructura: al hospedar tú mismo, debes proveer hosting, seguridad, mantenimiento.
* Verificar qué conectores están realmente maduros/soportados (el README menciona algunos “coming soon” en ciertas funcionalidades). ([GitHub][1])
* Control de costos de LLMs: dado que usa modelos potentes, necesitarás planificar bien prompts, enrutamiento, estado para mantener eficiencia.

---

## 7. ¿Por qué podría interesarte para tus proyectos?

Dado tu perfil (trabajo con arquitecturas backend, integración de flujos, fintech, remesas, widget, etc.), este marco podría aportar:

* Si en tu negocio «tienda de indumentaria femenina casual» (u otro emprendimiento vinculado) quisieras desplegar un asistente virtual para atención, ventas o soporte en WhatsApp/Telegram, Cel.ai podría ser una base técnica bastante avanzada.
* Si decides incorporar chatbots en tu backend de envío de dinero, remesas o workflows de procesamiento de usuario, tener un framework modular que permite múltiples “asistentes” (por ejemplo: “bot de onboarding KYC”, “bot de soporte de remesas”, “bot de marketing”) podría encajar bien en tu “arquitectura actual vs arquitectura compleja” que mencionabas implementar.
* Su modularidad se alinea con tu preferencia por «diagramas de secuencia, flujos definidos, claros roles» — podrías modelar cada “asistente” como un componente claro en tu diagrama de arquitectura, y luego el router como la capa que decide la lógica.


# Lola

## 1. ¿Qué es Lola?

### 🧠 **Lola – AI Conversational Platform for Remittances & KYC Automation**
**Role:** Chief AI Architect / Head of Innovation – LeapFinancial (2024–2025)

**Summary:**
Led the design and implementation of **Lola**, a **Generative AI–powered assistant** that enables users to send money, verify identity (KYC), and interact with financial systems entirely through **WhatsApp and web widgets**.
The system integrates **LLM-based reasoning**, **agentic orchestration**, and **secure fintech APIs**, combining **natural language understanding**, **context memory**, and **autonomous task execution** to simplify complex remittance flows.

**Highlights:**

* Designed a **multi-agent architecture** leveraging **GPT-4/5**, **LangChain, Langsmith, Langgraph**, for reasoning, retrieval, and dynamic API orchestration.
* Based on Cel.ai framework.
* Orchestration layer connecting to **Fiserv Digital Disbursements (DDP)**, **Intermex**, and **Cross River Bank** via secure tokenization and webhooks.
* Integrated **KYC & biometric verification** pipelines using **AWS Rekognition**, **YOLOv11-Face**, and **DeepFace**, allowing real-time onboarding and document validation. 
* Deployed **multi-environment CI/CD pipelines** (dev/qa/prod) with **FastAPI**, **NestJS**, **MongoDB Atlas**, **Railway**, and **Terraform**, ensuring seamless GenAI workflow testing and observability.
* Developed **Lola Bridge**, an agentic gateway that connects external systems (e.g., compliance dashboards, payments, WhatsApp Business API) via **AI-driven conversations**.
* Designed **“Widget Sessions”**, a conversational state model that preserves user context and reasoning chains across WhatsApp, web, and backend systems.
* Implemented **LLM safety layers** (compliance prompts, OFAC/AML filters) and contextual grounding to ensure secure and auditable interactions in regulated environments.

Stack:
- Frontend: Whatsapp + ReactJS (Widgets)
- Backend: FastAPI
- MongoDB
- Mongoose
- Docker
- GitHub Actions
- Doppler
- LangChain
- Langsmith
- Langgraph
- Cel.ai
- GPT-4/5

**Impact:**
Enabled LeapFinancial to launch a **fully conversational remittance experience**, reducing onboarding friction by over **70%** and positioning the company at the forefront of **GenAI fintech innovation** in LATAM.


# KYC AI Agent

## 1. ¿Qué es KYC AI Agent?

### 🧠 **KYC AI Agent – AI-Powered Identity Verification System**
**Role:** AI Architect / Head of Innovation – LeapFinancial (2024–2025)

**Summary:**
Designed and implemented **KYC AI Agent**, a **Generative AI–powered assistant** that enables users to verify their identity (KYC) through a conversational interface using **WhatsApp and web widgets**.
The system integrates **LLM-based reasoning**, **agentic orchestration**, and **secure fintech APIs**, combining **natural language understanding**, **context memory**, and **autonomous task execution** to simplify complex KYC flows.

**Highlights:**

* Full Stack Widget like integration with LeapFinancial's platform.
* Designed a **multi-agent architecture** leveraging **GPT-4/5**, **LangChain, Langsmith, Langgraph**, for reasoning, retrieval, and dynamic API orchestration.
* Based on Cel.ai framework.
* Integrated **KYC & biometric verification** pipelines using **AWS Rekognition**, **YOLOv11-Face**, and **DeepFace**, allowing real-time onboarding and document validation.

Stack:
- Frontend: ReactJS
- Backend: FastAPI
- MongoDB
- Mongoose
- Docker
- GitHub Actions
- Terraform
- Doppler
- LangChain
- Langsmith
- Langgraph
- Cel.ai
- GPT-4/5
- AWS Rekognition
- YOLOv11-Face
- SAM2
- DINOv2

**Impact:**
Enabled LeapFinancial to launch a **fully conversational KYC experience**, reducing onboarding friction by over **70%** and positioning the company at the forefront of **GenAI fintech innovation** in LATAM.


# Cross Border Remittance Platform

## 1. ¿Qué es Cross Border Remittance Platform?

### 🧠 **Cross Border Remittance Platform API**
**Role:** AI Architect / Head of Innovation – LeapFinancial (2024–2025)

**Summary:**
Designed and implemented **Cross Border Remittance Platform API** that enabled LeapFinancial to send money across borders.

3rd party API integration for remittance flows, featuring Intermex, Fiserv Digital Disbursements (DDP), and Cross River Bank.
Service Orchestration layer for remittance flows.
Tokenization layer for secure payments.
PCI DSS compliant.
Very Good Security vault for sensitive data.
Fast delivery CI/CD pipelines based on Terraform, Doppler, and GitHub Actions.

Stack:
- Frontend: ReactJS
- Backend: NestJS
- MongoDB
- Mongoose
- Redis
- Redlock
- Docker
- GitHub Actions
- Terraform
- Doppler


**Impact:**
Enabled LeapFinancial to launch great variety of remittance flows across borders. Supporting multiple currencies and countries.