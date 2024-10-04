
import { fetchPlaceholders,getMetadata } from '../../scripts/aem.js';
console.log(getMetadata("locale"));
const placeholders = await fetchPlaceholders(getMetadata("locale"));
console.log(placeholders);
const { fname,lname,header,firstName,lastName,occupation,role,bio,Organization} = placeholders;

export default function decorate(block) {
  const headingDiv=document.createElement('div');
  headingDiv.classList.add("table-heading");
  const htext=document.createTextNode(header);
  const headingH1=document.createElement('h1');
  headingH1.append(htext);
  headingDiv.append(headingH1);

  const table = document.createElement('table');
  let tr=document.createElement("tr");
  //let ad=document.createElement("th");ad.appendChild(document.createTextNode(authorDetails));tr.append(ad);
  let fnl=document.createElement("td");
  fnl.appendChild(document.createTextNode(fname));
  tr.append(fnl);
  let fn=document.createElement("td");
      fn.appendChild(document.createTextNode(firstName));
      tr.append(fn);
  table.append(tr);

  let tr1=document.createElement("tr");
  let lnl=document.createElement("td");
  lnl.appendChild(document.createTextNode(lname));
  tr1.append(lnl);
  let ln=document.createElement("td");
  ln.appendChild(document.createTextNode(lastName));
  tr1.append(ln);
  table.append(tr1);

  // let oc=document.createElement("tr");
  //     oc.appendChild(document.createTextNode(occupation));
  //     tr.append(oc);
  let tr2=document.createElement("tr");
  let ocl=document.createElement("td");
  ocl.appendChild(document.createTextNode(occupation));
  tr2.append(ocl);
  let oc=document.createElement("td");
  oc.appendChild(document.createTextNode(role));
  tr2.append(oc);
  table.append(tr2);

  // let bi=document.createElement("tr");
  //     bi.appendChild(document.createTextNode(bio));
  //     tr.append(bi);
  // let to=document.createElement("tr");
  //     to.appendChild(document.createTextNode(Organization));
  //     tr.append(to);
  //table.append(tr);
  [...block.children].forEach((row,r) => {
    let trow=document.createElement("tr");
    [...row.children].forEach((col,c) => {
      console.log(" Row : Col  ",r,c);
      let tcol=document.createElement("td");
      tcol.appendChild(col);
      trow.append(tcol);
      row.replaceWith(trow);
    });
    table.append(trow);
  });
  block.append(headingDiv);
  block.append(table);
}

