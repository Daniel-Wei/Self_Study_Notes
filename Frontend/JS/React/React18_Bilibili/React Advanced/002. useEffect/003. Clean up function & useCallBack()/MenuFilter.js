import MenuFilterModule from './MenuFilter.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';

const MenuFilter = ({ onFilterTextChanged }) => {
    const inputRef = useRef();
    const [filter, setFilter] = useState('');

    // 要求：当用户搜索输入完成后，再进行过滤；在搜索输入的过程中，不要进行=过滤
    // 判断用户搜索输入完成：0.3s内不再更新filter text
    useEffect(() => {
        const inputTimer = setTimeout(() => {
            onFilterTextChanged(filter.trim());
        }, 300);

        // 在Effect的回调函数中，可以指定一个函数作为返回值
        // 这个函数称之为清理函数：会在下次Effect执行前调用
        // 当开启一个新的定时器时，应该关掉上一个
        return (() => {
            clearTimeout(inputTimer);
        })
        
    }, [filter, onFilterTextChanged]);

    const onFilterInputChange = () => {
        setFilter(_ => inputRef.current.value);
    }

    return <div className={MenuFilterModule.filterContainer}>
        <div className={MenuFilterModule.inputContainer}>
            <FontAwesomeIcon 
                icon={faMagnifyingGlass} 
                className={MenuFilterModule.magnifyingGlass}
            />
            <input type="text" 
                placeholder="Search..." 
                ref={inputRef}
                value={filter}
                onChange={onFilterInputChange}></input>

        </div>
    </div>
}

export default MenuFilter;
