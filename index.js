function findProto (object) {
    do {
        object = Object.getPrototypeOf(object);
        console.log(object);
      } while (object);
}

findProto(new Date());