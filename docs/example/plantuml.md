# PlantUML

## 代码块（plantuml）

使用 `plantuml` 围栏编写 PlantUML 源码（由插件固定请求官方 PlantUML Server 生成 SVG）。

```plantuml
@startuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response

Alice -> Bob: Another authentication Request
Alice <-- Bob: Another authentication Response
@enduml

```

## 代码块（puml）

`puml` 与 `plantuml` 等价。

```puml
@startuml
!theme bluegray
:foo1;
-> You can put text on arrows;
if (test) then
  -[#blue]->
  :foo2;
  -[#green,dashed]-> The text can
  also be on several lines
  and **very** long...;
  :foo3;
else
  -[#black,dotted]->
  :foo4;
endif
-[#gray,bold]->
:foo5;
@enduml

```

## 类图

```plantuml
@startuml

abstract class AbstractList
abstract AbstractCollection
interface List
interface Collection

List <|-- AbstractList
Collection <|-- AbstractCollection

Collection <|- List
AbstractCollection <|- AbstractList
AbstractList <|-- ArrayList

class ArrayList {
  Object[] elementData
  size()
}

enum TimeUnit {
  DAYS
  HOURS
  MINUTES
}

annotation SuppressWarnings

@enduml

```

## 源码对照

```text
@startuml
Alice -> Bob: hello
Bob --> Alice: hi
@enduml
```
