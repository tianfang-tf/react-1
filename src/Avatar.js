import { getImageUrl } from './util.js';

export default function Avatar({ person, size }) { // 默认导出，其他文件可以直接import，而无需加花括号。
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
