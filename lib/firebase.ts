import { initializeApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

// 환경 변수 확인
const requiredEnvVars = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Firebase 설정
const firebaseConfig = {
  apiKey: requiredEnvVars.apiKey || '',
  authDomain: requiredEnvVars.authDomain || '',
  projectId: requiredEnvVars.projectId || '',
  storageBucket: requiredEnvVars.storageBucket || '',
  messagingSenderId: requiredEnvVars.messagingSenderId || '',
  appId: requiredEnvVars.appId || '',
};

const missingVars = Object.entries(requiredEnvVars)
  .filter(([key, value]) => !value)
  .map(([key]) => key);

if (missingVars.length > 0) {
  console.error('❌ Firebase 환경 변수가 설정되지 않았습니다:', missingVars);
  console.error('다음 환경 변수를 .env.local 파일에 추가해주세요:');
  missingVars.forEach(varName => {
    console.error(`  - NEXT_PUBLIC_FIREBASE_${varName.toUpperCase()}`);
  });
  console.error('\n현재 환경 변수 상태:');
  console.error('  apiKey:', requiredEnvVars.apiKey ? `✓ 설정됨 (${requiredEnvVars.apiKey.substring(0, 10)}...)` : '✗ 없음');
  console.error('  projectId:', requiredEnvVars.projectId ? `✓ 설정됨 (${requiredEnvVars.projectId})` : '✗ 없음');
  console.error('  authDomain:', requiredEnvVars.authDomain ? `✓ 설정됨 (${requiredEnvVars.authDomain})` : '✗ 없음');
  console.error('\n⚠️ 확인 사항:');
  console.error('  1. .env.local 파일이 프로젝트 루트에 있는지 확인');
  console.error('  2. 값에 따옴표(")나 공백이 없는지 확인');
  console.error('  3. 개발 서버를 재시작했는지 확인 (npm run dev)');
  console.error('  4. 파일 인코딩이 UTF-8인지 확인');
  
  if (typeof window !== 'undefined') {
    // 에러를 throw하지 않고 경고만 표시 (개발 중에는 계속 진행 가능)
    console.warn('Firebase가 환경 변수 없이 초기화됩니다. 일부 기능이 작동하지 않을 수 있습니다.');
  }
}

// Firebase 초기화
let app: ReturnType<typeof initializeApp>;
let db: Firestore;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  
  if (typeof window !== 'undefined') {
    console.log('✅ Firebase 초기화 완료');
    console.log('프로젝트 ID:', firebaseConfig.projectId);
  }
} catch (error) {
  console.error('❌ Firebase 초기화 실패:', error);
  throw error;
}

export { db };
export default app;

