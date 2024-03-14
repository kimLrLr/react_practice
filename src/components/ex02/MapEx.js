const arr = [1, 2, 3, 4, 5, 6, 7];

const menus = [
  {
    menu: "치킨",
    side: "맥주",
  },
  {
    menu: "국밥",
    side: "수육",
  },
  {
    menu: "햄버거",
    side: "콜라",
  },
];

export const MapEx = () => {
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(arr[i]);
  //   }

  //   arr.map((변수) => 함수);

  //   arr.map((num) => console.log(num));

  return (
    <div>
      <h1>배열에 어떤 값이 들어갔는가?</h1>
      <ul>
        {/* {arr.map((num, index) => (
          <li key={index}>숫자: {num}</li>
        ))} */}

        {arr.map((num) => (
          <li key={num}>숫자: {num}</li>
        ))}
      </ul>

      <h1>오늘의 메뉴👀</h1>
      <ul>
        {menus.map((food, idx) => (
          <li key={idx}>
            오늘의 메뉴는 {food.menu}, 사이드 메뉴는 {food.side}!
          </li>
        ))}
      </ul>
    </div>
  );
};
