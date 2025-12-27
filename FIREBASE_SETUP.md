# Firebase 설정 가이드

## 1. Firebase 프로젝트 생성

1. [Firebase Console](https://console.firebase.google.com)에 접속
2. "프로젝트 추가" 클릭
3. 프로젝트 이름 입력 및 Google Analytics 설정 (선택사항)
4. 프로젝트 생성 완료

## 2. Firestore Database 생성

1. Firebase Console에서 "Firestore Database" 메뉴 클릭
2. "데이터베이스 만들기" 클릭
3. 보안 규칙 선택:
   - **테스트 모드**: 개발 중에는 테스트 모드 선택 (30일 후 자동 만료)
   - **프로덕션 모드**: 실제 서비스 시 보안 규칙 설정 필요
4. 위치 선택 (asia-northeast3 - 서울 권장)
5. 데이터베이스 생성 완료

## 3. 웹 앱 추가 및 설정

1. Firebase Console에서 프로젝트 설정(톱니바퀴 아이콘) 클릭
2. "내 앱" 섹션에서 웹 아이콘(</>) 클릭
3. 앱 닉네임 입력 (예: "aug_29_band")
4. "Firebase Hosting 설정"은 체크하지 않음
5. "앱 등록" 클릭
6. Firebase SDK 설정 정보 복사

## 4. 환경 변수 설정

1. 프로젝트 루트에 `.env.local` 파일 생성
2. `.env.local.example` 파일을 참고하여 Firebase 설정 정보 입력:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key-here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

3. 개발 서버 재시작 (`npm run dev`)

## 5. Firestore 보안 규칙 설정 (프로덕션용)

프로덕션 환경에서는 다음 보안 규칙을 설정하세요:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /reservations/{reservationId} {
      // 읽기는 인증된 사용자만 가능 (또는 모두 허용)
      allow read: if true;
      // 쓰기는 누구나 가능 (또는 인증된 사용자만)
      allow create: if true;
      allow update: if true;
    }
  }
}
```

**주의**: 위 규칙은 모든 사용자가 읽기/쓰기가 가능합니다. 실제 서비스에서는 인증을 추가하거나 더 엄격한 규칙을 설정하세요.

## 6. 컬렉션 구조

예약 데이터는 `reservations` 컬렉션에 저장됩니다:

```
reservations/
  {documentId}/
    name: string
    phone: string
    is_paid: boolean
    createdAt: timestamp
    confirmedAt: timestamp (optional)
```

## 문제 해결

### Firebase 초기화 오류
- 환경 변수가 올바르게 설정되었는지 확인
- `.env.local` 파일이 프로젝트 루트에 있는지 확인
- 개발 서버를 재시작했는지 확인

### Firestore 권한 오류
- Firestore 보안 규칙 확인
- 테스트 모드가 만료되었는지 확인 (30일 후 자동 만료)

