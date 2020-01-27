Vue.component("navigation", {
  props: ["item"],
  data() {
    return {
      isOpen: false,
      active: false,
      mainMenu: [
        { url: "#", name: "Меню 1" },
        { url: "#", name: "Меню 2" },
        {
          url: "#",
          name: "Меню 3",
          children: [
            {
              url: "#",
              name: "Пункт меню номер 1",
              target: "_blank"
            },
            {
              url: "#",
              name: "Пункт меню номер 2",
              target: "_blank"
            },
            {
              url: "#",
              name: "Пункт меню номер 3",
              target: "_blank"
            },
            {
              url: "#",
              name: "Пункт меню номер 4",
              target: "_blank"
            },
            {
              url: "#",
              name: "Пункт меню номер 5",
              target: "_blank"
            },
            {
              url: "#",
              name: "Пункт меню номер 6",
              target: "_blank",
              children: [
                {url: "#", name: "Подпункт меню номер 1", target: "_blank"}
              ]
            },
            {
              url: "#",
              name: "Пункт меню номер 7",
              target: "_blank"
            }
          ]
        },
        { url: "#", name: "Меню 4" },
        { url: "#", name: "Меню 5" }
      ]
    };
  },
  template: `
    <ul id="navigation">
        <li v-for="item in mainMenu">
            <template v-if="item.children">
                <a 
                  :href="item.url" 
                  :title="item.name" 
                  @click="isOpen = !isOpen, active = !active" 
                  :class="{ active }">{{ item.name }}</a>
                <div :class="{ isOpen }" class="sub-menu">
                    <ul>
                        <li 
                          v-for="{ url, name, index, target } in item.children" 
                          :key="index">
                            <a :href="url" :title="name" :target="target">{{ name }}</a>
                        </li>
                    </ul>
                </div>
            </template>
            <template v-else>
                <a 
                  :href="item.url" 
                  :title="item.name">{{ item.name }}</a>
            </template>
        </li>
    </ul>
    `
});

new Vue({ el: "#app" });
