# Marea Picante - Landing Page

Una landing page moderna y responsiva para el restaurante Marea Picante, especializado en cocina peruana y mariscos frescos.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Componentes Modulares**: Arquitectura de componentes reutilizables y mantenibles
- **TypeScript**: Tipado estático para mejor desarrollo y mantenimiento
- **Tailwind CSS**: Estilos utilitarios para un desarrollo rápido y consistente
- **Optimización de Imágenes**: Imágenes optimizadas para mejor rendimiento
- **Código Limpio**: Estructura organizada y buenas prácticas de desarrollo

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Superset de JavaScript con tipado estático
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework de CSS utilitario
- **ESLint** - Linter para mantener calidad de código

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Menu.tsx
│   │   ├── Chefs.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   └── ui/
│       └── Button.tsx
├── assets/
│   └── images/
├── types/
│   └── index.ts
├── constants/
│   └── index.ts
└── App.tsx
```

## 🎨 Secciones de la Landing Page

1. **Header** - Navegación principal con logo y menú
2. **Hero** - Sección principal con mensaje de bienvenida
3. **About** - Información sobre el restaurante
4. **Menu** - Muestra de platos destacados
5. **Chefs** - Información sobre el equipo culinario
6. **Testimonials** - Reseñas de clientes
7. **Contact** - Información de contacto y ubicación
8. **Footer** - Enlaces adicionales y información de contacto

## 🚀 Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd website
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

5. **Previsualizar build de producción**
   ```bash
   npm run preview
   ```

## 🎯 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza el build de producción
- `npm run lint` - Ejecuta ESLint para verificar calidad de código

## 🎨 Paleta de Colores

- **Primary**: `#48dfd6` (Turquesa)
- **Navy**: `#061854` (Azul marino)
- **White**: `#ffffff` (Blanco)
- **Gray**: Varios tonos de gris para texto y fondos

## 📱 Responsividad

La landing page está optimizada para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Personalización

### Modificar Contenido
- Editar `src/constants/index.ts` para cambiar textos, menús y datos
- Reemplazar imágenes en `src/assets/images/`

### Modificar Estilos
- Personalizar colores en `tailwind.config.js`
- Agregar estilos globales en `src/index.css`

### Agregar Componentes
- Crear nuevos componentes en `src/components/`
- Definir tipos en `src/types/index.ts`

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

Para más información sobre el proyecto, contacta a través de:
- Email: info@mareapicante.pe
- Teléfono: +51 1 234-5678