import React from 'react';

const RankingContainer = () => {
    return (
        <div className="ranking_container">
            <div class="ewa_ranking">
                <h3>Ewa Ranking</h3>
                <p>Your Present Ewa Ranking is</p>
                <div>Agba Ewa</div>
            </div>
            <div class="ewa_point_score">
                <p>Ewa points</p>
                <div class="score">10</div>
                <span>Beans</span>
            </div>
        </div>
    );
};

export default RankingContainer;