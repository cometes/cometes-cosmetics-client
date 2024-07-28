export const getDate = (date: string) => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = _date.getMonth() + 1;
  const dd = _date.getDate();
  return `${yyyy}-${mm}-${dd}`;
};
export const getDate2 = (date: string) => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = _date.getMonth() + 1;
  const dd = _date.getDate();
  return `${yyyy} . ${mm} . ${dd}`;
};

export const getDateTime = (date: string) => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = String(_date.getMonth() + 1).padStart(2, "0");
  const dd = String(_date.getDate()).padStart(2, "0");
  const hh = String(_date.getHours()).padStart(2, "0");
  const min = String(_date.getMinutes()).padStart(2, "0");
  return `${yyyy} . ${mm} . ${dd} ${hh}:${min}`;
};

export const getDateTime2 = (time: number) => {
  const day = Math.floor(time / 86400);
  const hours = String(Math.floor((time % 86400) / 3600)).padStart(2, "0");
  const min = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const sec = String(time % 60).padStart(2, "0");

  return ` ${day}일 ${hours}시간 ${min}분 ${sec}초`;
};
