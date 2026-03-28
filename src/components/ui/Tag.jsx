export default function Tag({ label, color }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '3px 10px',
      borderRadius: '3px',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      color,
      background: `${color}18`,
      border: `1px solid ${color}35`,
      fontFamily: 'var(--font-body)',
    }}>
      {label}
    </span>
  )
}
