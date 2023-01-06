import { times } from "lodash";
import React, { useState } from "react";
import { MAX_POS } from "../constant";
import { getInitialTileList } from "../util/tile";
import useMoveTile from "../hook/useMoveTile";

export default function Game() {
    const [tileList, setTileList] = useState([getInitialTileList]);
    //up, down, left, right
    // useMoveTile()

    return (
        <div className="game-container">
            <div className="grid-container">
                {times(MAX_POS, (index) => (
                    <div key={index} className="grid-row">
                        {times(MAX_POS, (index2) => (
                            <div key={index2} className="grid-cell"></div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="tile-container">
                {tileList.map((item) => (
                    <div key={item.id} className={`tile tile-${item.value} tile-position-${item.x}-${item.y}`}>
                        <div className="tile-inner">{item.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
