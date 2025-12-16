## Expo React Native + TypeScript

With Demineur game as MOB1 course

### Prerequisites

- Node.js ≥ 18
- npm or yarn
- Expo CLI (via npx)

#### Run Projet

```
npm install
npm install --save-dev typescript
npm install --save-dev @types/react @types/react-native
```

```
npx expo start
```

#### Fixing error if `expo/tsconfig.base' not found`

If TypeScript errors persist after updating `tsconfig.json`:

1. Press **Ctrl + Shift + P**
2. Select **TypeScript: Restart TS Server**
3. Wait a few seconds for the server to restart
4. The errors should be resolved
