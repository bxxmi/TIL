# Error: [rejected] main -> main (non-fast-forward)

원격 저장소에 README.md 파일과 함께 새로운 레파지토리를 생성하고, 해당 주소를 로컬 저장소에 remote 연결을 했다.
이후, main으로 브랜치 이름을 변경하고 원격 저장소로 push 할 때 문제가 발생했다.

![image](https://user-images.githubusercontent.com/56878724/138601638-9baa5b9e-dc05-40db-9df3-a3a8987ded17.png)

아마도 master 브랜치로 레파지토리와 README.md 파일을 생성했는데, main 브랜치로 다시 push 하려니 충돌이 난 것 같았다.

보통 <b>`failed to push some refs to '...'`</b>는 원격 저장소와 로컬 저장소의 파일 내용이 달라서
발생하는 에러이기 때문에 git pull 후 다시 push를 시도했지만 해결되지 않았다.

<h3>⚠️ 원인</h3>

깃허브 레파지토리 생성 시 같이 만든 README.md 파일 때문이다. 즉, 로컬에서 미리 생성한 프로젝트를 원격 저장소에 
push 할 때, 원격 저장소에 있는 README.md 파일과 충돌이 날 수 있다.


<h3>✅ 해결</h3>

> 첫 번째 방법

해당 경우에 브랜치 이름 앞에 <b>`+`</b>를 추가해서 push하면 된다.

> 두 번째 방법

main 브랜치가 origin/main 을 추적하지 못한 상황

```
$ git fetch origin

$ git branch -u origin/main // 추적 설정

$ git config pull.rebase true // pull 정책 설정 (공통 조상이 없는 경우 rebase는 true)

$ git pull origin

$ git config -unset pull.rebase // pull 정책 삭제 시
```
