import classNames from 'classnames/bind';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import Style from './Image.module.scss';

//fallback:customFallback ||đổi tên từ fallback sang customFallback do trong nội bộ đã có 1 trường tên fallback
const Image = forwardRef(({ src, alt, fallback: customFallback = images.NoImage, ...props }, ref) => {
    //    khi không truyền fallback từ ngoài vào thì sẽ lấy images.NoImage , còn nếu truyền thì sẽ lấy giá trị truyền vào
    const [fallback, setFallback] = useState('');

    const HandleError = () => {
        setFallback(customFallback);
    };
    // khi bị lỗi ảnh sẽ lọt vào onError và sẽ gọi setFallback để lấy ảnh mặc định hiển thị
    //tiếp đó do fallback có giá trị nên nó sẽ ưu  tiên gọi fallback thay vì src
    // eslint-disable-next-line
    return (
        <img
            className={classNames(Style.wrapper, classNames)} //chưa rõ lỗi , theo video thì classNames không có s
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={HandleError}
        />
    );
});
// nếu không có forwardRef DOM không định vị được do sử dụng component Image do người dùng tạo
//khi trỏ chuột tới sẽ không thể hiển thị popper do không định vị được
// sử dụng forwardRef để lấy ref cho DOM định vị
export default Image;
