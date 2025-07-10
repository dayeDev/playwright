import { defineConfig, devices } from "@playwright/test";

/**
 * 환경 변수 파일(.env)을 읽습니다.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * Playwright 테스트 구성 문서:
 * https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  timeout: 30_000, // 각 테스트 당 최대 실행 시간 (30초)
  globalTimeout: 10 * 60 * 1000, // 전체 테스트 실행에 대한 최대 시간 (10분)
  testDir: "./tests", // 테스트 파일이 위치한 디렉토리

  /* 테스트 파일들을 병렬로 실행합니다. */
  fullyParallel: true,

  /* CI 환경에서 실수로 test.only를 남겼을 경우 빌드를 실패하게 합니다. */
  forbidOnly: !!process.env.CI,

  /* CI 환경에서만 테스트 재시도 : 뒤에는 로컬 환경 실행 횟수 */
  retries: process.env.CI ? 2 : 0,

  /* CI 환경에서는 병렬 워커 수를 1로 제한 */
  workers: process.env.CI ? 1 : undefined,

  /* 사용할 리포터 지정. HTML 리포트 생성 */
  reporter: "html",

  /* 모든 프로젝트에 공통적으로 적용되는 설정 */
  use: {
    // `await page.goto('/')` 같은 명령에 사용할 기본 URL
    baseURL: "https://practicesoftwaretesting.com",

    /* 모든 테스트에서 trace(브라우저 내부 작업 기록)를 수집합니다.
     trace viewer로 테스트 흐름을 시각적으로 분석할 수 있습니다. */
    trace: "on",

    /* 각 개별 액션(예: 클릭, 입력)에 대한 시간 제한을 비활성화합니다 (0 = 무제한).
     매우 느린 요소나 애매한 조건에서 유용할 수 있습니다. */
    actionTimeout: 0,

    /* HTTPS 인증서 오류를 무시합니다.
     자체 서명된 인증서를 사용하는 로컬 서버 테스트 시 유용합니다. */
    ignoreHTTPSErrors: true,

    /* 테스트 실패 시, 해당 테스트의 실행 영상을 저장합니다.
     문제 분석에 도움이 됩니다. */
    video: "retain-on-failure",

    /* 테스트가 처음 실패할 때만 스크린샷을 저장합니다.
     실패 시점의 화면 상태를 확인할 수 있습니다. */
    screenshot: "on-first-failure",

    /* 브라우저를 headless 모드로 실행합니다 (UI 없이 백그라운드 실행).
     CI 환경이나 자동화에서 일반적으로 사용됩니다. */
    headless: true,
  },

  /* 주요 브라우저에 대한 테스트 설정 */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },

    /* 모바일 뷰포트에서의 테스트 설정 (필요시 주석 해제) */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* 브라우저의 브랜드 버전에 대한 테스트 설정 (예: Edge, Chrome) */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* 테스트 전에 로컬 개발 서버를 실행하는 설정 (필요시 주석 해제) */
  // webServer: {
  //   command: 'npm run start', // 서버 실행 명령
  //   url: 'http://localhost:3000', // 서버 주소
  //   reuseExistingServer: !process.env.CI, // CI가 아닐 경우 기존 서버 재사용
  // },
});
