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
