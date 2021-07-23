# Git 사용법 정리


# 환경설정

커밋 시 사용자의 이름과 이메일이 필요하기 때문에 초기에 환경설정을 해야한다.

* 사용자 이름 설정

```
$ git config --global user.name "깃허브계정이름"
```
* 사용자 이메일 설정

```
$ git config --global user.email "깃허브메일주소"
```
  
* vi 편집 에디터 설정

```
$ git config --global core.editor "vim"
```

* 로그 등 문서의 내용을 전체 출력해서 볼 수 있도록 설정

```
$ git config --global core.pager "cat"
```

* 디폴트 브랜치 설정

```
$ git config --global init.defaultBranch "main"
```

* 설정 확인

```
$ git config --list
```

* 설정 해제

```
$ git config --unset 설정명
```

# 커밋 메시지 컨벤션

커밋 제목은 50자 이내로 요약하여 작성하며 prefix를 사용하여 한 눈에 커밋 용도를 알기 쉽게 하는 것이 바람직하다.

`feat:` 새로운 기능 추가

`docs:` 문서 생성 및 변경

`test:` 테스트 코드 추가

`refactor:` 코드 리팩토링

`fix:` 버그 수정

`conf:` 환경설정 관련

`build:` 빌드 관련

* example

```
feat: Create server.py to start flask project

docs: Create README.md

conf: poetry init

test: User model CRUD test complete
```

# .gitignore

`.gitignore`는 git이 파일을 추적할 때, 어떤 파일이나 폴더 등을 추적하지 않도록 명시하기 위해 작성합니다. 해당 문서에 작성된 리스트는 수정사항이 발생해도 git이 무시합니다. 특정 파일 확장자를 무시하거나 이름에 패턴이 존재하는 경우, 특정 디렉토리 아래의 모든 파일을 무시할 수 있습니다.

# License

오픈소스 프로젝트에서가장 중요한 License는 내가 만들 때에도, 배포할 때에도 가장 신경써야 하는 일 중 하나입니다. 가장 많이 사용하는 License는 다음과 같습니다.

* MIT License
	* MIT에서 만든 라이센스로, 모든 행동에 제약이 없고 저작권자는 소프트웨어와 관련한 책임에서 자유롭습니다.

* Apache License 2.0
	* Apache 재단이 만든 라이센스로 특허권 관련 내용이 포함되어 있습니다.

* GNU General Public License v3.0
	* 가장 많이 알려져있으며 의무사항(해당 라이센스가 적용된 소스코드 사용 시 GPL을 따라야함)이 존재합니다.
