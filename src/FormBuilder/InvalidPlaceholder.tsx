import React from "react";

export default function InvalidPlaceholder({ fieldName }: { fieldName: string; }) {
    return (
        <div style={{
            color: '#FF8080',
            padding: '12px',
            backgroundColor: '#290000',
            borderRadius: 8
        }}>{`Invalid: "${fieldName}"`}</div>
    );
}
