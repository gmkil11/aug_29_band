# GitHub Pages 배포 가이드

## 1. GitHub Secrets 설정

GitHub 저장소에서 환경 변수를 Secrets로 설정해야 합니다.

### 설정 방법:

1. GitHub 저장소 페이지로 이동
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Secrets and variables** → **Actions** 클릭
4. **New repository secret** 버튼 클릭
5. 다음 6개의 Secret을 각각 추가:

#### 필수 Secrets:

| Secret 이름 | 설명 | 예시 값 |
|------------|------|---------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API 키 | `AIzaSy...` |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase 인증 도메인 | `your-project.firebaseapp.com` |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase 프로젝트 ID | `your-project-id` |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase 스토리지 버킷 | `your-project.appspot.com` |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase 메시징 발신자 ID | `123456789` |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase 앱 ID | `1:123456789:web:abc123` |

### 각 Secret 추가 방법:

1. **Name**: 위의 Secret 이름을 정확히 입력 (예: `NEXT_PUBLIC_FIREBASE_API_KEY`)
2. **Secret**: `.env.local` 파일에 있는 해당 값 복사하여 붙여넣기
3. **Add secret** 버튼 클릭
4. 나머지 5개도 동일하게 반복

## 2. GitHub Pages 설정

1. GitHub 저장소 → **Settings** 탭
2. 왼쪽 메뉴에서 **Pages** 클릭
3. **Source** 섹션에서:
   - **Deploy from a branch** 선택
   - **Branch**: `gh-pages` 선택 (또는 GitHub Actions 사용 시 자동 설정됨)
   - **Folder**: `/ (root)` 선택
4. **Save** 클릭

## 3. 배포 방법

### 방법 1: GitHub Actions (권장)

1. 코드를 `main` 브랜치에 푸시:
   ```bash
   git add .
   git commit -m "Add GitHub Actions workflow"
   git push origin main
   ```

2. GitHub에서 자동으로 빌드 및 배포가 시작됩니다
3. **Actions** 탭에서 진행 상황 확인
4. 배포 완료 후 `https://[사용자명].github.io/aug_29_band/` 에서 확인

### 방법 2: 로컬에서 직접 배포

```bash
npm run build
npm run deploy
```

## 4. 환경 변수 확인

배포 후 브라우저 콘솔에서 다음을 확인:
- `✅ Firebase 초기화 완료`
- `프로젝트 ID: [프로젝트ID]`

만약 `undefined`가 표시되면:
1. GitHub Secrets가 올바르게 설정되었는지 확인
2. Actions 탭에서 빌드 로그 확인
3. 환경 변수 이름이 정확한지 확인 (대소문자 구분)

## 5. 문제 해결

### 빌드 실패 시:
- Actions 탭에서 빌드 로그 확인
- 환경 변수가 모두 설정되었는지 확인
- Secret 이름이 정확한지 확인 (대소문자, 언더스코어)

### Firebase 연결 실패 시:
- Firestore 보안 규칙 확인
- Firebase 프로젝트 설정 확인
- 브라우저 콘솔의 에러 메시지 확인

## 6. 보안 주의사항

⚠️ **중요**: 
- `.env.local` 파일은 절대 Git에 커밋하지 마세요
- `.gitignore`에 `.env*`가 포함되어 있는지 확인
- Firebase API 키는 공개되어도 되지만, 프로덕션에서는 Firestore 보안 규칙을 설정하세요

