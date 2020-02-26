
export const pythonThreadLocals = {
  language: 'python',
  code:
`  # python
  import threading
  threadContext = threading.local()
  threadContext.myVariable = "some value"`
};

export const javaThreadLocals = {
  language: 'java',
  code:
`  // java
  private static ThreadLocal<Integer> threadLocal = new ThreadLocal<>();
  threadLocal.set(42);
  Integer actualValue = threadLocal.get();`
}

export const clickTimeout =
`  button.addEventListner('click', handleClick);
  function handleClick() {
    setTimeout(afterASecond, 1000);
  }
  
  function afterASecond() {
    // no idea who called me and why
  }`;

export const simpleParameters =
` function first(param) {
    second(param);
  }

  function second(param) {
    third(param);
  }

  function third(param) {
    actuallyUses(param);
  }`;

export const x = 1;
