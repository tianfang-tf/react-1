import { getImageUrl } from './util.js';
import Avatar from './Avatar.js';

export default function Section({p2, alt, imageId, profession, awardsList, discovered, size}) {
  return (
    <section className="profile">
        <h2>{p2}</h2>
        <ul>
          <li>
            <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Awards: {awardsList.length} </b> 
            ({awardsList.join(',')})
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </section>
  )
}