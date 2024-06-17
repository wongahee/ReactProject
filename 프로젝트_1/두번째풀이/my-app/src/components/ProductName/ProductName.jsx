import './productName.css'

export default function ProductName({productName}) {
  return (
    <strong className="product-name sl-eliipsis">
        {productName}
    </strong>    
)
}
