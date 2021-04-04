import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry poiter">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png)'
                }}
            >
            </div>
            <div className="journal__entry_body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Voluptate dolor laborum officia pariatur proident elit ut non eu laborum eiusmod id consectetur eiusmod.
                </p>
            </div>
            <div
                className="journal__entry-date-box"
            >
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>

    )
}
