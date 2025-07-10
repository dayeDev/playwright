# Learning Playwright

여기는 LinkedIn Learning 과정 `learning-playwright`입니다.  
전체 과정은 [LinkedIn Learning][lil-course-url]
에서 이용할 수 있습니다.

![learning-playwright][lil-thumbnail-url]

## Course Description

Playwright가 다른 최고 등급의 오픈 소스 자동화 도구 대열에 합류한 것은 놀라운 일이 아닙니다. 테스터와 개발자는 여러 라이브러리 및 기타 도구를 결합하지 않고도 새로운 테스트 자동화 프로젝트를 빠르게 생성할 수 있는 Playwright의 포괄적인 기능 세트를 사용할 수 있습니다.  수동 테스터, 품질 보증 전문가, 소프트웨어 개발자, 숙련된 자동화 엔지니어 등 이 과정을 통해 Playwright의 가장 중요한 기능을 직접 사용해 볼 수 있는 실무 경험을 쌓을 수 있습니다. 강사와 함께 필수 사항을 살펴보고 첫 번째 테스트 작성, 실행, 분석 및 디버깅을 시작할 수 있도록 준비하세요.

_업데이트된 지침과 정보는 메인 브랜치에 있는 readme 파일을 참조하세요._

## Instructions

이 리포지토리에는 강좌의 각 비디오에 대한 브랜치가 있습니다. github의 브랜치 팝업 메뉴를 사용하여 특정 브랜치로 전환하여 해당 단계의 강좌를 살펴볼 수 있으며, URL에 `/tree/BRANCH_NAME`을 추가하여 액세스하려는 브랜치로 이동할 수도 있습니다.

## Branches

분기는 코스의 비디오에 해당하는 구조로 되어 있습니다. 명명 규칙은 `CHAPTER#_MOVIE#`입니다. 예를 들어, `02_03`이라는 브랜치는 두 번째 챕터와 해당 챕터의 세 번째 비디오에 해당합니다.
일부 브랜치에는 시작과 끝 상태가 있습니다. 이러한 브랜치는 "시작"을 나타내는 `b`와 "끝"을 나타내는 `e`로 표시됩니다. `b` 브랜치에는 동영상의 시작 부분에 있는 코드가 그대로 들어 있습니다. `e` 브랜치에는 동영상이 끝날 때의 코드가 그대로 들어 있습니다. 메인 브랜치는 코스에 있을 때 코드의 최종 상태를 보관합니다.

파일을 변경한 후 한 연습 파일 브랜치에서 다른 연습 파일 브랜치로 전환할 때 다음과 같은 메시지가 표시될 수 있습니다:

    오류가 발생했습니다: 결제 시 다음 파일에 대한 로컬 변경 내용을 덮어씁니다:
    [files]
    브랜치를 전환하기 전에 변경 내용을 커밋하거나 저장해 주세요.
    중단

이 문제를 해결하려면 다음과 같이 하세요:  
다음 명령을 사용하여 git에 변경 사항을 추가합니다: git add .  
다음 명령을 사용하여 변경 사항을 커밋합니다: git commit -m "일부 메시지"

## Using the Course Repository

1. 이 연습 파일을 사용하려면 다음이 설치되어 있어야 합니다:
   - 현재, 활성 또는 유지 관리 버전 [node](https://nodejs.org/en/about/previous-releases) | [node installer](https://nodejs.org/en/download/prebuilt-installer)
   - [GIT](https://github.com/git-guides/install-git) for command line only or [GitHub Desktop](https://github.com/apps/desktop) for a GUI experience.
   - [VS Code](https://code.visualstudio.com/) Code Editor
   - [Playwright Test for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
   - 나머지 단계는 다음 강좌에서 다룹니다.
2. 터미널(Mac), CMD(Windows) 또는 SourceTree와 같은 GUI 도구를 사용하여 이 리포지토리를 로컬 머신에 복제합니다.
3. [RESOURCES.md](./RESOURCES.md) 파일을 활용하여 코스에 대한 모든 링크를 따라가십시오.

## Instructor

Butch Mayhew

Playwright 홍보대사

                        
다음에서 다른 강좌를 확인하세요.
[LinkedIn Learning](https://www.linkedin.com/learning/instructors/butch-mayhew?u=104).

[0]: # "Replace these placeholder URLs with actual course URLs"
[lil-course-url]: https://www.linkedin.com/learning/learning-playwright/
[lil-thumbnail-url]: https://media.licdn.com/dms/image/v2/D4D0DAQH9KXFauT3_nw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1730827611420?e=2147483647&v=beta&t=Hgonc3KqLVcsREG50BjKBFZ07NP2DY-pksa9-Oweu7Q
