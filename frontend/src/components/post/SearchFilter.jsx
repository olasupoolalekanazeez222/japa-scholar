// =====================================================
// SearchFilter Component
// Search + Country Filter + Pathway Filter
// =====================================================

import "../../styles/SearchFilter.css";

export default function SearchFilter({

    search,
    setSearch,

    category,
    setCategory,

    subcategory,
    setSubcategory,

    categories,
    subcategories

}){

    return(

        <div className="search-filter">

            {/* Search Box */}

            <input

                type="text"

                placeholder="🔍 Search title, country, pathway..."

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

                className="search-input"

            />

            {/* Filters */}

            <div className="filter-row">

                <select

                    value={category}

                    onChange={(e)=>setCategory(e.target.value)}

                >

                    <option value="">All Countries</option>

                    {

                        categories.map((item)=>(

                            <option

                                key={item}

                                value={item}

                            >

                                {item}

                            </option>

                        ))

                    }

                </select>

                <select

                    value={subcategory}

                    onChange={(e)=>setSubcategory(e.target.value)}

                >

                    <option value="">All Pathways</option>

                    {

                        subcategories.map((item)=>(

                            <option

                                key={item}

                                value={item}

                            >

                                {item}

                            </option>

                        ))

                    }

                </select>

            </div>

        </div>

    )

}