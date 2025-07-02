import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePageAC, getUsersThunkCreator } from '../../store/reducers/userReducer'
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"

import style from './Pagination.module.css'

const Pagination = () => {
    const dispatch = useDispatch()
    const { totalPageCount, totalCount, page } = useSelector((state) => state.usersPage)

    const pageCount = Math.ceil(totalCount / totalPageCount)

    const groupSize = 10
    const currentGroup = Math.floor((page - 1) / groupSize)
    const startPage = currentGroup * groupSize + 1
    const endPage = Math.min(startPage + groupSize - 1, pageCount)
    const visiblePages = []
    for (let i = startPage; i <= endPage; i++) {
        visiblePages.push(i)
    }

    useEffect(() => {
        dispatch(getUsersThunkCreator(page))
    }, [page])

    const changePage = (p) => {
        dispatch(changePageAC(p))
    }

    return (
        <div className={style.pagination}>
            <button
                onClick={() => changePage(startPage - groupSize)}
                disabled={startPage === 1}
            >
                <MdNavigateBefore size={24} />
            </button>
            {
                visiblePages.map((p) => (
                    <button
                        key={p}
                        onClick={() => changePage(p)}
                        disabled={p === page}
                        style={p === page ? { backgroundColor: "#2980b9" } : {}}
                    >
                        {p}
                    </button>
                ))
            }
            <button
                onClick={() => changePage(startPage + groupSize)}
                disabled={endPage === pageCount}
            >
                <MdNavigateNext size={24} />
            </button>
        </div>
    )
}

export default Pagination