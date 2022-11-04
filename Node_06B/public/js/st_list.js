/**
 * table 에 클릭이벤트가 발생하면 실제 선택된 td(target) 정보를 가져와서 td에 설정된 dataset.st_num 에서
 * 학번을 getter 하고 학번을 가지고 서버에 detail 요청을 하는 코드
 * 문제점 : 학생정보의 td 가 여러개 있는데 어떤 td 를 클릭해도 같은 코드가 실행되도록 하려면
 *         모든 td 에 dataset 을 설정해야 한다 (즉, 같은 코드가 중복되는 현상 발생)
 */

const tdClickHandlerV1 = (tag) => {
  const target = tag.target;
  if (target.tagName === "TD") {
    // tag 의 data-st_num 로 설정된 항목의 값을 가져오는 코드
    const st_num = target.dataset.st_num;
    // alert(`클릭된 TD, ${st_num}`);
    document.location.href = `/student/detail/${st_num}`;
  }
};

const tdClickHandlerV2 = (tag) => {
  const target = tag.target; // TD 요소 getter
  // 선택된 td 를 감싸고 있는 tr tag 요소를 다시 getter
  const parentTR = target.closest("TR");
  // tr 에 설정된 data-st_num 값 getter
  const st_num = parentTR.dataset.st_num;
  // alert(st_num);
  document.location.href = `/student/${st_num}/detail`;
};

document.addEventListener("DOMContentLoaded", () => {
  const stTable = document.querySelector("table.student.list");
  /*
  이벤트 버블링을 이용한 event handling 의 간소화
  원하는 것은 학생정보 List 중 한 학생의 Row 를 클릭했을 때 반응하는 event 를 만들고자 한다
  이때 각 Row 들에게 event 를 부여하면 너무 많은 event 설정이 생성 -> 많은 비용 소요
  Row 들을 감싸고 있는 한개의 box 를 지정하여 그 box 에 event handling 설정 후 이벤트 버블링을 활용하여
  어떤 Row 가 클릭됐는지 알아내 연산 수행
   */
  stTable?.addEventListener("click", tdClickHandlerV2);
});
