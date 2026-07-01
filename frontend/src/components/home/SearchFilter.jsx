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

            {/* Search */}

            <input

                type="text"

                placeholder="Search posts..."

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

            />

            {/* Filter Row */}

            <div className="filter-row">

                <select

                    value={category}

                    onChange={(e)=>setCategory(e.target.value)}

                >

                    <option value="">All Countries</option>

                    {

                        categories.map((country)=>(

                            <option

                                key={country}

                                value={country}

                            >

                                {country}

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