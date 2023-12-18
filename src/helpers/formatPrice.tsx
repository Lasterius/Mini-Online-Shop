export const formatPrice = (price: number) => {
  if (price.toString().includes('.')) {
    const [mainPart, otherPart] = price.toString().split('.');
    return (
      <span>
        <span className='price__other'>CZK</span>
        {mainPart}.<span className='price__other'>{otherPart}</span>
      </span>
    );
  }
  return (
    <span>
      <span className='price__other'>CZK</span>
      {price}
    </span>
  );
};
