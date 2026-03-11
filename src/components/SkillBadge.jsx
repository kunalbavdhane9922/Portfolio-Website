const colorMap = {
    Python: '#3B82F6',
    JavaScript: '#F59E0B',
    TypeScript: '#3B82F6',
    React: '#38BDF8',
    'Node.js': '#10B981',
    'Tailwind CSS': '#06B6D4',
    Docker: '#2563EB',
    PostgreSQL: '#6366F1',
    MongoDB: '#10B981',
    Redis: '#EF4444',
    FastAPI: '#10B981',
    TensorFlow: '#F97316',
    'Scikit-learn': '#F59E0B',
    Kafka: '#8B5CF6',
    Kubernetes: '#3B82F6',
    Nginx: '#10B981',
    'Socket.io': '#94A3B8',
    'Chart.js': '#EC4899',
    Express: '#94A3B8',
    'Express.js': '#94A3B8',
    Streamlit: '#F97316',
    Pandas: '#3B82F6',
    NumPy: '#6366F1',
    C: '#64748B',
    'C++': '#64748B',
    SQL: '#8B5CF6',
    Git: '#F97316',
    Linux: '#F59E0B',
    JWT: '#10B981',
    default: '#64748B',
};

const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-sm px-4 py-1.5',
};

export default function SkillBadge({ label, size = 'md', className = '' }) {
    const color = colorMap[label] || colorMap.default;

    return (
        <span
            className={`inline-flex items-center font-medium rounded-md border transition-colors ${sizeClasses[size]} ${className}`}
            style={{
                color,
                borderColor: `${color}30`,
                backgroundColor: `${color}12`,
            }}
        >
            {label}
        </span>
    );
}
