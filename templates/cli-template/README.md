# 🦫 Capibara CLI Template

Plantilla base para crear tu propio CLI moderno con TypeScript, Commander, Inquirer y empaquetado con `pkg`.

---

## 📁 Estructura del Proyecto

```
vscommander/
├── release/             # Ejecutables generados para win/mac/linux
├── src/
│   ├── commands/        # Comandos individuales
│   ├── utils/           # Funciones reutilizables (editor, prompt, etc.)
│   ├── types/           # Definiciones de tipos personalizados
│   └── cli.ts           # Punto de entrada principal del CLI
├── templates/           # Plantillas para generación de proyectos (opcional)
├── pkg.js               # Script para empaquetar en binarios multiplataforma
├── tsconfig.json        # Configuración de TypeScript
├── package.json         # Metadata y scripts del proyecto
└── README.md            # Esta documentación
```

---

## 🧠 Descripción de Archivos

| Archivo / Carpeta | Función                                                         |
| ----------------- | --------------------------------------------------------------- |
| `src/cli.ts`      | CLI principal que registra todos los comandos                   |
| `src/commands/`   | Comandos individuales (status, register, edit-json, etc.)       |
| `src/utils/`      | Utilidades reutilizables: edición, inputs, banners, etc.        |
| `src/types/`      | Tipos TypeScript para uso común                                 |
| `templates/`      | Archivos base si tu CLI genera proyectos                        |
| `pkg.js`          | Empaquetador de ejecutables para Windows, Mac y Linux con `pkg` |
| `release/`        | Carpeta generada automáticamente con ejecutables                |

---

## 🚀 Uso

### 1. Instalar dependencias

```bash
npm install
```

### 2. Compilar TypeScript

```bash
npm run build
```

### 3. Ejecutar en desarrollo

```bash
npm run start
```

### 4. Ejecutar un comando directamente

```bash
node dist/src/cli.js status
```

---

## 📦 Empaquetado en binarios

### Ejecutar script para generar binarios multiplataforma

```bash
npm run pkg
```

Esto generará archivos en:

```
release/
├── win/<project-name>.exe
├── mac/<project-name>
└── linux/<project-name>
```

> Asegúrate de tener instalado `pkg`:
>
> ```bash
> npm install -g pkg
> ```

---

## 🧪 Comandos Disponibles

| Comando     | Descripción                                            |
| ----------- | ------------------------------------------------------ |
| `status`    | Verifica la disponibilidad de una API remota (PokéAPI) |
| `edit-json` | Descarga y edita un archivo JSON en tu editor          |
| `register`  | Pide información al usuario usando `inquirer`          |

---

## 🔧 Funcionalidades incluidas

- ✔️ Edición de archivos con tu editor local (`code`, `notepad`, `nano`, etc.)
- 📄 Inputs y formularios CLI con validación
- 📡 Integración con APIs REST
- 📊 Visualización en tabla
- 💾 Escritura y lectura de archivos
- 🔍 Detección automática de editores
- 🎛️ Modularización con `commander`
- 📦 Compilación en `.exe`/binarios con `pkg`

---

## 🐾 Personalización

### Cambiar nombre del comando principal

En `package.json`:

```json
"bin": {
  "capibara": "./dist/src/cli.js"
}
```

Esto permitirá ejecutar con:

```bash
capibara status
```

### Agregar banner ASCII

Edita `src/utils/banner.ts` y muestra al inicio del CLI con:

```ts
import { showBanner } from './utils/banner'
showBanner()
```

---

## 🧠 Sugerencias de nuevos comandos para tus CLI

- `init`: Generar estructura de proyecto
- `config`: Ver o editar configuración local
- `token`: Guardar y usar tokens de APIs
- `env`: Leer y escribir variables de entorno
- `update`: Verificar nueva versión
- `whoami`: Mostrar información del usuario actual
- `generate`: Crear archivos dinámicamente
- `log`: Mostrar logs desde archivos locales
- `sync`: Sincronizar carpetas o datos remotos

---

## ✅ Requisitos

- Node.js 18+
- TypeScript 5+
- `pkg` instalado globalmente

---

## 💡 Tips

- Usa `console.table()` para mostrar objetos o arrays.
- Puedes guardar configuraciones en `~/.capibara-cli.json`.
- Agrega `.capibara` en proyectos para personalización automática.
- Los comandos pueden estar anidados: `capibara user create`, `capibara db reset`, etc.

---

## 📚 Recursos

- [Commander.js](https://github.com/tj/commander.js)
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)
- [Undici (fetch para Node.js)](https://github.com/nodejs/undici)
- [pkg (Vercel)](https://github.com/vercel/pkg)

---

## 🦫 Autor

Capibara CLI creado con ❤️.
