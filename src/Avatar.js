import { getImageUrl } from './util.js';

export default function Avatar({ imageId, alt, size }) { // 默认导出，其他文件可以直接import，而无需加花括号。
  return (
    <img
      className="avatar"
      src={getImageUrl(imageId, size >= 90 ? 'b' : 's')}
      alt={alt}
      width={size}
      height={size}
    />
  );
}
