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
