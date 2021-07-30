# Gitflow 사용법 정리

* git flow 시작

```
$ git flow init
```

`main` : 최종 릴리즈에 사용되는 안정된 버전

`develop` : 다음 릴리즈를 위해 개발중인 최신 버전

`feature` : 특정 기능 개발을 위한 branch

`release` : 릴리즈를 위한 branch

`hotfix` : 긴급 버그를 해결하기 위한 branch

`support` : 버전 호환성 문제를 해결하기 위한 branch

* 기능 개발 시작

```
$ git flow feature start 브랜치명
```

* 기능 개발 종료

```
$ git flow feature finish 브랜치명
```

* 릴리즈 시작

```
$ git flow release start 버전명
```

* 릴리즈 점검 후 끝내기

```
$ git flow release finish 버전명
```

* 태그 조회

```
$ git tag
```

* 태그 원격 저장소에 올리기

```
$ git push --tags
```
