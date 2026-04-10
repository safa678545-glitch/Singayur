import { TICKER_ITEMS } from '../data';

/**
 * Infinite horizontal scrolling ticker.
 * 
 * The trick for seamless infinite animation:
 * - We render the full set of items TWICE inside a flex container.
 * - The CSS animation translates the container by exactly -50%
 *   (i.e. the width of one full set).
 * - When it reaches -50%, it resets to 0, but because the second
 *   copy is identical, the transition appears seamless.
 */
const Ticker: React.FC = () => {
  return (
    <div className="ticker-wrap" aria-hidden="true" id="ticker">
      <div className="ticker-track">
        {/* First copy */}
        <div className="ticker-segment">
          {TICKER_ITEMS.map((item, i) => (
            <span key={`a-${i}`}>{item}</span>
          ))}
        </div>
        {/* Second copy — makes the loop seamless */}
        <div className="ticker-segment">
          {TICKER_ITEMS.map((item, i) => (
            <span key={`b-${i}`}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
