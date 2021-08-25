import { classManager } from "Shared/helper/classManager";
import React from "react";

const Search = (props) => {
    return (
        <div class="modal popup-search-style" id="searchActive">
            <button type="button" class="close-btn" data-bs-dismiss="modal">
                <span
                    aria-hidden="true"
                    onClick={() => {
                        classManager("app-main", "modal-open");
                        classManager("searchActive", "show");
                        classManager("searchActive", "d-block");
                    }}
                >
                    &times;
                </span>
            </button>
            <div class="modal-overlay">
                <div class="modal-dialog p-0" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <h2>Search Your Product</h2>
                            <form class="navbar-form position-relative" role="search">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Search here..." />
                                </div>
                                <button type="submit" class="submit-btn">
                                    <i class="pe-7s-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
