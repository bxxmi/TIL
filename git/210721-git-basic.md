# Git 사용법 정리

* [환경설정](#환경설정)
	* 사용자 정보 설정
* [메시지 컨벤션](#커밋-메시지-컨벤션)
	* 커밋 메시지 작성법
* [gitignore](#gitignore)
	* 원격 저장소에 변경사항을 저장하지 않고 무시할 파일 설정
* [License](#License)
	* 오픈소스 관련 라이센스 설정
* [Clone](#Clone)
	* 원격 저장소 복제
* [Commit](#Commit)
	* 파일 변경 상태 저장
* [Push](#Push)
	* 로컬 저장소의 커밋을 원격 저장소에 반영
* [Pull](#Pull)
	* 원격 저장소의 변경 사항을 로컬 저장소에 반영
* [Branch](#Branch)
	* 효율적인 형상관리를 위한 분기점
***

# 환경설정

커밋 시 사용자의 이름과 이메일이 필요하기 때문에 초기에 환경설정을 해야합니다.

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

커밋 제목은 50자 이내로 요약하여 작성하며 prefix를 사용하여 한 눈에 커밋 용도를 알기 쉽게 하는 것이 바람직합니다.

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

# Clone

원격 저장소 주소를 복제합니다.

* 깃허브 repository 주소 복사

```
$ git clone 레파지토리주소
```

# Commit

파일 변경 상태를 적용합니다.

* 파일 변경 상태 확인

```
$ git status
```

* 커밋 스테이지에 파일 올리기

```
$ git add 파일명
```

* 커밋 스테이지에서 파일 내리기

```
$ git reset Head 파일명
```

* 커밋

```
$ git commit
```

* 커밋 취소

```
$ git reset HEAD^
```

* 로그 확인

```
$ git log
```

# Push

원격 저장소에 로컬 저장소의 커밋을 반영합니다.

* 푸쉬

```
$ git push 원격저장소명 브랜치명
$ git push origin main

```

# Pull

원격 저장소의 변경 내용을 로컬 저장소에 반영합니다.

* 풀

```
$ git pull 원격저장소명 브랜치명
```

# Branch

분기점을 생성해서 독립적으로 코드를 변경할 수 있도록 도와주는 모델로서 실수를 줄이기 위해 많이 사용하는 방법입니다.

* 로컬 브랜치 확인

```
$ git branch
```

* 사용 가능한 원격 브랜치 확인

```
$ git branch -r
```

* 사용 가능한 모든 브랜치 확인

```
$ git branch -a
```

* 브랜치 생성

```
$ git branch 브랜치명
```

* 브랜치 변경

```
$ git checkout 브랜치명
```

* 브랜치 생성과 동시에 변경

```
$ git checkout -b 브랜치명
```

* 브랜치 삭제

```
$ git branch -D 브랜치명
```

* 지정한 원격 브랜치로 푸쉬

```
$ git push origin 브랜치명
```
