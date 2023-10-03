const emailOne = document.getElementById("emailOne");
const emailContainer = document.getElementById("emailContainer");
const mainContent = document.getElementById("mainContent");
const desktopSidebar = document.getElementById("desktopSidebar");

emailOne.addEventListener("click", () => {
  emailOne.style.backgroundColor = "rgba(0, 0, 0, 0.1)";

  //add delays for user feedback effect
  setTimeout(() => {
    emailOne.style.backgroundColor = ""; 
  }, 200);
  
  setTimeout(() => {
    emailContainer.classList.add("d-none");
    desktopSidebar.classList.remove("d-lg-block");
    mainContent.classList.remove("d-lg-flex");
  }, 200);

  // Create the elements
  const div1 = document.createElement("div");
  div1.className = "p-3 d-flex justify-content-between align-items-center";
  const backBtn = document.createElement("i");

  backBtn.id = "back-btn";
  backBtn.className = "bi bi-chevron-left fs-4";
  const iconDiv = document.createElement("div");
  iconDiv.className = "d-flex gap-3 align-items-center";
  const icons = [
    "bi-archive fs-4",
    "bi-trash fs-4",
    "bi-envelope fs-4",
    "bi-three-dots fs-4",
  ];

  // Append icons to iconDiv
  for (const iconClass of icons) {
    const icon = document.createElement("i");
    icon.className = iconClass;
    iconDiv.appendChild(icon);
  }

  // Append backBtn and iconDiv to div1
  div1.appendChild(backBtn);
  div1.appendChild(iconDiv);

  const div2 = document.createElement("div");
  div2.className = "container-fluid d-flex align-items-center gap-3 mb-4";
  const emailAvatar = document.createElement("i");
  emailAvatar.className = "bi bi-person-circle email-avatar";
  const flexColumnDiv = document.createElement("div");
  flexColumnDiv.className = "d-flex flex-column gap-3";
  const senderInfo1 = document.createElement("div");
  senderInfo1.className = "d-flex gap-1";
  senderInfo1.textContent = "BVT 15:53";
  const senderInfo2 = document.createElement("div");
  senderInfo2.className = "d-flex gap-1";
  senderInfo2.innerHTML = 'to me <i class="bi bi-chevron-down"></i>';

  // Append emailAvatar, senderInfo1, and senderInfo2 to div2
  div2.appendChild(emailAvatar);
  flexColumnDiv.appendChild(senderInfo1);
  flexColumnDiv.appendChild(senderInfo2);
  div2.appendChild(flexColumnDiv);

  const div3 = document.createElement("div");
  div3.className = "container-fluid";
  const p1 = document.createElement("p");
  p1.textContent = "Dear Carlos,";
  const p2 = document.createElement("p");
  p2.innerHTML = `
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem,
    quaerat. Excepturi sapiente iure dolor, voluptatem placeat repudiandae
    exercitationem non autem.<br /><br />
    Debitis quidem iusto maiores libero. Voluptatibus ab tempore
    temporibus assumenda! Adipisci modi quod corporis est saepe provident
    cupiditate placeat accusantium nostrum, molestiae illum consequatur
    dolorum nam nihil facilis aut, minima praesentium facere deserunt!
    Quisquam perspiciatis consequatur facilis esse provident repellendus?
    Earum molestias ratione nesciunt dignissimos atque soluta recusandae
    sapiente nisi modi voluptatibus sit et ad quod nostrum, saepe
    cupiditate.<br /><br />
    necessitatibus culpa debitis obcaecati pariatur explicabo ab!
    Architecto est nemo illum. Vero molestias porro libero quos dolore
    veniam quae facere illum culpa placeat. Inventore sed aliquam non
    nihil tempora, doloribus modi quam amet nesciunt maiores voluptate
    minima hic corporis perspiciatis nulla! Corrupti similique dolores
    veniam repellendus qui iusto, ex reiciendis fugit. Tempora, in officia
    cum quod veniam quia velit illo, asperiores atque sapiente
    praesentium, distinctio odio amet dolorum ad dicta laboriosam.
  `;
  const p3 = document.createElement("p");
  p3.innerHTML = "Sincerely, <br /> Bay Valley Tech";

  // Append p1, p2, and p3 to div3
  div3.appendChild(p1);
  div3.appendChild(p2);
  div3.appendChild(p3);

  const div4 = document.createElement("div");
  div4.className = "input-group position-fixed bottom-0 d-lg-none";
  const textarea = document.createElement("textarea");
  textarea.className = "form-control";
  textarea.setAttribute("aria-label", "With textarea");
  textarea.setAttribute("placeholder", "Send message");
  const sendIcon = document.createElement("span");
  sendIcon.className = "input-group-text";
  sendIcon.innerHTML = '<i class="bi bi-send"></i>';

  // Append textarea and sendIcon to div4
  div4.appendChild(textarea);
  div4.appendChild(sendIcon);

  const replyBtn = document.createElement("button")
  replyBtn.type = "button"
  replyBtn.textContent = "Reply"
  replyBtn.className = "btn btn-primary fixed m-4"
  replyBtn.setAttribute("data-bs-toggle", "modal");
  replyBtn.setAttribute("data-bs-target", "#exampleModal");

  // Append div1, div2, div3, and div4 to mainContent with some delay
  setTimeout(() => {
    mainContent.appendChild(div1);
    mainContent.appendChild(div2);
    mainContent.appendChild(div3);
    mainContent.appendChild(div4);
    mainContent.appendChild(replyBtn);
  }, 200);

  //add eventListener to backBtn
  backBtn.addEventListener("click", () => {
    mainContent.removeChild(div1)
    mainContent.removeChild(div2)
    mainContent.removeChild(div3)
    mainContent.removeChild(div4)
    mainContent.removeChild(replyBtn)
    emailContainer.classList.remove("d-none")
    desktopSidebar.classList.add("d-lg-block")
    mainContent.classList.add("d-lg-flex");

  })
});
