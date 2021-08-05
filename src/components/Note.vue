<template>
  <div>
      View에 해당하는 html 코드를 작성하는 영역
  </div>
</template>

<script>
export default {
    name : '', //component name
    components : {}, //다른 component 사용 시 저장
    data() {return {}}, //html과 js에서 사용할 데이터 변수 선언
    computed : {}, //반응형 데이터를 포함하는 복잡한 로직이 필요한 경우 사용, 캐싱이 됨, 즉 렌더링이 반복될 시 사용하는 데이터의 변동이 없을 경우 연산을 하지 않아도 됨
    watch : {}, //비동기 or 비싼 작업 수행 시 computed를 대신하여 사용하기 유용
    methods : {}, //computed와 동일한 결과를 표현 가능. 캐싱을 하지 않아야할 경우 사용
    setup() {}, //composition api라는데 여기까진 못나감
    beforeCreate() {}, //instance가 초기화 된 직후 실행, watcher 설정전에 동기로 호출. data나 각종 events, el등이 세팅전 시점
    created() {}, //component 생성된 후 실행, data와 events에 접근 가능, template이나 가상돔은 마운팅 및 렌더되기 전임
    beforeMount() {},//템플릿과 렌더함수들이 컴파일된 후 렌더링 직전에 후킹. 추천하지 않는다함. ssr사용시 호출안됨
    mounted() {}, //temlate에 정의된 html 코드가 렌더링된 후 실행. 모든 하위 component가 마운트된 상태는 아님. ssr사용시 호출안됨
    beforeUpdate() {}, //데이터가 변하여 업데이트 사이클이 시작될때 실행 
    updated() {}, // re rendering 후에 실행. 모든 하위 component의 rerendering 상태를 보장못함
    activated() {}, //keep-alive가 활성화될때, ssr사용시 호출안됨
    deactivated() {}, //keep-alive가 활성화될때, ssr사용시 호출안됨
    errorCaptured(err, vm, info) {console.info(err,vm,info); return false;}, //자식 component의 에러가 포착될 시.(err: Error, instance: Component, info: string) => ?boolean, false리턴 시 에러 전파를 막음
    renderTracked(e) {console.info(e);}, //가상 DOM RERENDERING이 추적될 때 호출
    renderTriggered(e) {console.info(e);}, //가상 DOM RERENDERING이 실행될 때 호출
    beforeUnmount() {}, //unmounted전에 호출, 인스턴스가 완전한 상태
    unmounted() {}, //unmount될 때 실행, component에서 빠져나갈 경우를 뜻함 ssr사용시 호출안됨
}
</script>

<style>

</style>