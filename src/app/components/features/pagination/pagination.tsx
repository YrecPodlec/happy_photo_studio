"use client";
import React, { useState } from "react";
import PaginationBtn from "@/app/components/features/pagination/ui/paginationBTN";

interface Props {
    children: (page: number) => React.ReactNode;
    maxPage: number;
}

const Pagination = ({ children, maxPage }: Props) => {
    const [page, setPage] = useState(0);

    const handlePageChange = (direction: "prev" | "next") => {
        setPage((prev) => {
            if (direction === "prev" && prev > 0) return prev - 1;
            if (direction === "next" && prev < maxPage) return prev + 1;
            return prev;
        });
    };

    return (
        <section className="flex gap-8 justify-between items-center xxxs:gap-2">
            <PaginationBtn direction="prev" onClick={() => handlePageChange("prev")} disabled={page <= 0} />
            {children(page)}
            <PaginationBtn direction="next" onClick={() => handlePageChange("next")} disabled={page >= maxPage} />
        </section>
    );
};

export default Pagination;
