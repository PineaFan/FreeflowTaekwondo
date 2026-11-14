import Link from "next/link";
import { belts } from "@/lib/data/belts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import _ from "lodash";
import { ordinal } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Badge } from "@/components/ui/badge";
import { BeltPreview } from "@/components/belt-preview";

function BeltList() {
    const beltsByGroup = _(belts)
        .map((belt, key) => ({ ...belt, key }))
        .groupBy("group")
        .value();

    const groupLabels = {
        junior: "Junior Belts",
        senior: "Senior Belts",
        black: "Black Belts"
    } as const;

    return (
        <Tabs defaultValue="senior" className="mx-auto w-full max-w-md">
            <TabsList className="grid h-11 w-full grid-cols-3">
                {Object.keys(beltsByGroup).map((group) => (
                    <TabsTrigger key={group} value={group}>
                        {groupLabels[group as keyof typeof groupLabels]}
                    </TabsTrigger>
                ))}
            </TabsList>

            {Object.keys(beltsByGroup).map((group) => (
                <TabsContent key={group} value={group} className="mt-4">
                    <ItemGroup className="gap-2">
                        {beltsByGroup[group].map((belt) => (
                            <Item
                                key={belt.key}
                                size="xs"
                                variant="outline"
                                render={<Link href={`/checklist/${belt.key}`} />}
                            >
                                <ItemMedia className="w-16 h-9 bg-muted" variant="image">
                                    <BeltPreview {...belt} key={null} />
                                </ItemMedia>
                                <ItemContent>
                                    <ItemTitle>
                                        {belt.name}
                                        {belt.level && belt.group !== "black" && (
                                            <Badge variant="secondary">{ordinal(belt.level)} Kup</Badge>
                                        )}
                                        {belt.group === "junior" && <Badge variant="secondary">Junior</Badge>}
                                    </ItemTitle>
                                    <ItemDescription>
                                        {belt.group !== "black" && `Grading for ${belts[belt.next].name}`}
                                    </ItemDescription>
                                </ItemContent>
                                <ItemActions>
                                    <ChevronRightIcon className="text-muted-foreground" />
                                </ItemActions>
                            </Item>
                        ))}
                    </ItemGroup>
                </TabsContent>
            ))}
        </Tabs>
    );
}

export default function ChecklistPage() {
    return (
        <div className="flex w-full flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-1 text-center">
                <h1 className="text-2xl font-bold">Grading Checklist</h1>
                <p className="text-sm mt-0 text-muted-foreground text-balance">
                    Select your current belt to see what's on your next grading.
                </p>
            </div>
            <div className="w-full px-4">
            <BeltList /></div>
        </div>
    );
}
