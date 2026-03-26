---
description: How to setup a React Native base project resembling the BitexcoPower architecture
---

# React Native Base Setup Skill

This workflow provides instructions on how to recreate the React Native base architecture used in this project. An agent or developer can follow these steps to bootstrap a new project with identical standards, libraries, and configurations.

## 1. Project Initialization & Core Dependencies

**React Native Version Check:**
Ensure the new project is initialized with React Native `0.84.x` and React `19.2.x`.

**Install Core Dependencies:**
```bash
npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/stack react-native-screens react-native-safe-area-context
npm install @reduxjs/toolkit react-redux redux-persist react-native-mmkv
npm install react-native-paper react-native-size-matters react-native-svg react-native-linear-gradient react-native-reanimated react-native-gesture-handler
npm install axios lodash moment react-native-device-info
```

**Install Dev Dependencies:**
```bash
npm install -D babel-plugin-module-resolver react-native-worklets reactotron-redux reactotron-react-native @types/lodash
```

## 2. Directory Structure Setup
Create the following directory structure inside the `src` folder:

```text
src/
├── api/             # API services and RTK Query configurations
├── assets/          # Images, fonts, and static resources
├── components/      # UI Components following Atomic Design
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── modals/
│   └── FloatingMenu/
├── constants/       # App constants, Colors, typography
├── hooks/           # Custom React hooks
├── navigation/      # React Navigation setup and routers
├── screens/         # Main screen components
├── services/        # Third-party service integrations & axios instances
└── store/           # Redux Toolkit setup and slices
    └── slices/
```

## 3. Path Aliases Configuration

**Babel Configuration (`babel.config.js`):**
Add the `module-resolver` plugin to map aliases to the `src` folder.

```javascript
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@store': './src/store',
          '@hooks': './src/hooks',
          '@constants': './src/constants',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
        },
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    ],
    'react-native-worklets/plugin',
  ]
};
```

**TypeScript Configuration (`tsconfig.json`):**
Ensure the `paths` in `compilerOptions` correspond to the Babel aliases for strict type checking.

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@api/*": ["src/api/*"],
      "@assets/*": ["src/assets/*"],
      "@components/*": ["src/components/*"],
      "@store/*": ["src/store/*"],
      "@hooks/*": ["src/hooks/*"],
      "@constants/*": ["src/constants/*"],
      "@navigation/*": ["src/navigation/*"],
      "@screens/*": ["src/screens/*"]
    }
  }
}
```

## 4. State Management (Redux Toolkit)
Set up the centralized Redux store using RTK, RTK Query, and Redux Persist.

1. **Store Configuration (`src/store/store.ts`):**
   - Use `combineReducers` to merge standard slices (e.g., `authSlice`) and RTK Query reducers (e.g., `baseApi.reducer`).
   - Create an MMKV storage adapter for `redux-persist`:
     ```typescript
     import { MMKV } from 'react-native-mmkv';
     import { Storage } from 'redux-persist';
     const storage = new MMKV();
     export const reduxStorage: Storage = {
       setItem: (key, value) => { storage.set(key, value); return Promise.resolve(true); },
       getItem: (key) => { const value = storage.getString(key); return Promise.resolve(value); },
       removeItem: (key) => { storage.delete(key); return Promise.resolve(); },
     };
     ```
   - Configure `redux-persist` using the custom `reduxStorage` adapter created above.
   - Create a `transform` (e.g., `authTransform`) that clears the token and user data from state when `isRemember` is false upon rehydration.
   - Inject the store into the Axios interceptor setup to handle token refreshing or global 401 handling (`injectStore(store)`).
   - Add `reactotron-redux` enhancer for debugging (only in `__DEV__`).

2. **API Slices:**
   - Define a `baseApi` with RTK Query in `src/services/api.ts`.
   - Extend `baseApi` with injected endpoints for other domains.

## 5. UI and Theming (Colors)
Create `src/constants/Colors.ts` to manage the app palette, supporting light and dark modes natively via `react-native`'s `Appearance.getColorScheme()`.

**Standard Palette Definition:**
```typescript
import { Appearance } from "react-native";

const palette = {
  primary: '#028894',
  primary_contrast: '#FFFFFF',
  secondary: '#EE5D0A',
  reject: "#E74A3B",
  error: '#E74A3B',
  text: '#181818',
  placeholder: '#888888',
  text_secondary: '#666666',
  icon: '#7D7D7D',
  borderInput: '#F0F0F0',
  white: '#FFFFFF',
  black: '#000000',
  border: '#CCCCCC',
  
  // Statuses
  processing: "#007AFF",
  pending: "#FF9500",
  rejected: "#FD4848",
  approved: "#34C759",
};

const lightTheme = { ...palette };
const darkTheme = { ...palette }; // Adjust values for dark theme

const systemTheme = Appearance.getColorScheme();
const Colors = systemTheme === 'dark' ? darkTheme : lightTheme;

export default Colors;
```

## 6. Component Architecture (Atomic Design)
All components MUST be built using the Atomic design pattern inside `src/components/`:
- **Atoms**: Basic building blocks (Buttons, Inputs, Text, Icons). Use `react-native-size-matters` here for scaling dimensions (`moderateScale`, `verticalScale`).
- **Molecules**: Combinations of atoms (Form Fields, List Items).
- **Organisms**: Complex UI components forming distinct sections (Headers, Bottom Sheets with `@lodev09/react-native-true-sheet`).
- **Modals**: Global overlays and dialog boxes.
- **FloatingMenu**: Floating action buttons or complex contextual menus.

## Next Steps
When scaffolding a new app using this skill, the agent should incrementally set up each file starting from dependencies, then TS/Babel config, then core folder structure, Theme generation, and finally Redux initialization.
