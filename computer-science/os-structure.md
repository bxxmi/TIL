# 운영체제

운영체제는 `Operating System` 또는 `OS` 라고 불리며 시스템 자원을 관리합니다. 사용자와 컴퓨터간의 커뮤니케이션을 지원하며 컴퓨터 하드웨어와 응용 프로그램을 제어합니다.

* 시스템 자원 = 컴퓨터 하드웨어
    * CPU(중앙처리장치), Memory (RAM, DRAM)
    * I/O Devices (입출력장치)
		* Monitor, Mouse, Keyboard, Network
    * 저장매체
		* SSD, HDD(하드디스크) : 운영체제가 저장(설치)된 곳

* 대표적인 운영체제
	* Windows OS, Mac OS, UINX
	* UNIX OS
		* UNIX 계열 OS 이며 사용법, 구조가 UNIX와 유사
		* LINUX OS

* 운영체제와 응용 프로그램의 관계
	* 운영체제는 응용프로그램을 관리
		* 응용 프로그램 실행							
		* 응용 프로그램의 `권한` 관리 ex) 관리자 권한으로 실행
		* 응용 프로그램을 사용하는 `사용자` 관리 ex) 로그인


* 운영체제의 목표

사용자가 사용하는 응용 프로그램이 효율적이고 적절하게 동작하도록 지원하는 것입니다.

>`쉘(Shell)`을 통해 사용자가 운영체제 기능과 서비스를 조작할 수 있는 인터페이스를 제공합니다. 또한, `API`를 통해서 함수 및 라이브러리 형태로 응용 프로그램을 위한 인터페이스를 제공합니다.

# 스케쥴링

* 비선점 스케쥴링

하나의 프로세스가 끝나지 않으면 다른 프로세스는 CPU를 사용할 수 없습니다.즉, 자발적으로 프로세스가 blocking 상태로 들어가거나 실행이 끝났을 때만 다른 프로세스로 교체하는 스케쥴링입니다.

`FIFO` : 배치 처리 시스템과 유사하며 먼저 들어온 데이터가 먼저 나가는 구조를 띕니다.

`SJF` : 실행 시간이 가장 짧은 프로세스부터 먼저 실행 시키는 알고리즘입니다.

`Priority-Based` : 프로세스에 우선 순위를 미리 매겨놓고 높은 순서대로 CPU에 실행시키는 형태를 띄며 프로세스마다 우선 순위를 미리 지정하는 `정적 우선순위`, 상황에 따라 동적으로 변경하는 `동적 우선순위`가 있습니다.

* 선점형 스케쥴링

하나의 프로세스가 다른 프로세스 대신에 프로세서를 차지할 수 있습니다. 즉, 프로세스 running 중에 스케쥴러가 이를 중단시키고, 다른 프로세스로 교체가 가능하다는 의미입니다. 응답시간이 빠르고 운영체제가 사용자가 원하는 것에 기반해서 최적의 스케쥴링을 하는 것은 선점형 스케쥴러이기 때문에 대부분 선점형 스케쥴러 형태를 띄고 있습니다.

`Round Robin` : 시분할 시스템 기반으로 이루어진 알고리즘이기 때문에 하나의 프로세스가 끝나면 다음 프로세스를 실행시킵니다.

# 프로세스

메모리에 올려져서 실행 중인 프로그램을 프로세스라고 합니다.

* 프로세스 상태

`running state` : 현재 CPU 실행 상태입니다.

`ready state` : CPU에서 실행 가능한 상태(실행 대기 상태)입니다.

`block state` : 특정 이벤트 발생 대기 상태(=wait)입니다.

`idle state` : CPU를 사용하지 않는 상태입니다.

# OS History

* [1950년대](#1950년대)
* [1960년대](#1960년대)
* [1970년대](#1970년대)
* [1980년대](#1980년대)
* [1990년대](#1990년대)
* [2000년대](#2000년대-이후)

***

# 1950년대

ENIAC이라는 이름의 첫 번째 컴퓨터가 나왔습니다. 또한, 제대로 된 운영체제가 없었기 때문에 응용 프로그램이 시스템 자원을 제어했습니다.

# 1960년대 

프로그램의 종류와 사용자가 많아지기 시작한 시기입니다. 이때, 여러 응용 프로그램을 순차적으로 실행하는 `배치 처리 시스템`이 출현했습니다. 

* 배치 처리 시스템
	* 단점 
	     * 컴퓨터 응답 시간이 오래 걸릴 수 있음
	     * CPU가 필요없음에도 응용 프로그램이 CPU를 점유할 수 있기 때문에 실행 시간도 오래걸릴 수 있음

# 1960년대 후반

`시분할 시스템`, `멀티 태스킹`이라는 새로운 개념이 제안됐습니다. 이들은 응용 프로그램이 CPU를 사용하는 시간을 잘개 쪼개고 여러 개의 응용 프로그램을 동시에 실행하는 기법입니다. 

* 시분할 시스템

다중 사용자를 지원하고 컴퓨터 응답시간을 최소화하는 시스템입니다.

* 멀티 태스킹

단일 CPU에서 여러 응용 프로그램의 병렬 실행을 가능하게 하는 시스템입니다. 결과적으로 사용자 입장에서는 여러 응용 프로그램이 동시에 실행 되는 것처럼 보입니다.

> 멀티 프로그래밍은 시간대비 CPU 활용도를 높여 전체 응용 프로그램의 실행 시간을 줄일 수 있습니다.

> 멀티 프로세싱은 여러 CPU에 하나의 프로그램을 병렬로 실행해서 실행속도를 극대화 합니다.

# 1970년대

본격적으로 운영체제의 중요성이 부각된 시기입니다. 현대 운영체제의 기술을 확립하고, C언어를 기반인 `UNIX OS`가 나왔습니다.

* UNIX

현대 운영체제의 기본 기술을 모두 포함한 최초의 운영체제입니다. `멀티 태스킹`, `시분할 시스템`, `멀티 프로그래밍`, `다중 사용자`를 지원합니다.

# 1980년대

개인용 컴퓨터 시대가 도래했습니다. 터미널 환경의 CLI, GUI 환경이 생겨났습니다.

# 1990년대

사용자가 크게 늘어났으며 `GUI환경`의 응용 프로그램 시대가 도래했습니다. 이때부터 Windows OS가 대중화 되었습니다. 또한, 네트워크의 기술 발전으로 인터넷이 대중화 되었고 오픈 소스 운동이 활성화 되었습니다.

# 2000년대 이후

오픈소스와 더불어 `가상 머신`, `대용량 병렬 처리` 등 다양한 기술이 활성화 되었습니다.