interface Customer {
  id: number;
  heading: string;
  description: string;
}

const customerList: Customer[] = [];

for (let i = 0; i < 1000; i++) {
  const id = i + 1;
  const heading = `Customer ${i + 1}`;
  const description =
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultrices diam mattis finibus vivamus ultricies nam varius natoque. Eu augue ex ridiculus; vivamus pulvinar commodo? Libero sociosqu nec imperdiet nascetur; phasellus fringilla. Nullam rhoncus eros proin nullam molestie rutrum mi et. Dignissim volutpat interdum vulputate mattis pellentesque cubilia leo. Sollicitudin cursus pellentesque torquent aenean morbi. Lobortis dictum arcu; eros tellus consectetur habitant. Tortor suspendisse duis litora scelerisque ultricies curae.";
  customerList.push({
    id,
    heading,
    description,
  });
}

export { customerList };
